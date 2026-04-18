import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactRecord = {
  id: string;
  submittedAt: string;
  name: string;
  email: string;
  company: string;
  serviceInterest: string;
  message: string;
};

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<ContactRecord>;

  if (!body.name?.trim()) {
    return NextResponse.json(
      { message: "Name is required." },
      { status: 400 },
    );
  }

  if (!body.email?.trim() || !validateEmail(body.email)) {
    return NextResponse.json(
      { message: "A valid email address is required." },
      { status: 400 },
    );
  }

  if (!body.message?.trim()) {
    return NextResponse.json(
      { message: "Message is required." },
      { status: 400 },
    );
  }

  const dataDir = path.join(process.cwd(), "data");
  const filePath = path.join(dataDir, "inquiries.json");

  await mkdir(dataDir, { recursive: true });

  let existingRecords: ContactRecord[] = [];

  try {
    const current = await readFile(filePath, "utf8");
    existingRecords = JSON.parse(current) as ContactRecord[];
  } catch {
    existingRecords = [];
  }

  const nextRecord: ContactRecord = {
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
    name: body.name.trim(),
    email: body.email.trim(),
    company: body.company?.trim() ?? "",
    serviceInterest: body.serviceInterest?.trim() ?? "",
    message: body.message.trim(),
  };

  existingRecords.push(nextRecord);

  await writeFile(filePath, JSON.stringify(existingRecords, null, 2));

  return NextResponse.json({
    message: "Your enquiry has been received.",
  });
}
