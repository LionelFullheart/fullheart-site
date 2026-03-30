import { mkdir, readFile, writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

type IntakePayload = {
  fullName?: string;
  businessName?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  deployment?: string;
  deadline?: string;
  notes?: string;
};

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "intake-submissions.json");

export async function POST(request: Request) {
  const body = (await request.json()) as IntakePayload;

  const fullName = body.fullName?.trim();
  const businessName = body.businessName?.trim();
  const email = body.email?.trim();
  const projectType = body.projectType?.trim();
  const deadline = body.deadline?.trim();

  if (!fullName || !businessName || !email || !projectType || !deadline) {
    return NextResponse.json(
      { message: "Please complete the required fields before submitting." },
      { status: 400 },
    );
  }

  const submission = {
    id: crypto.randomUUID(),
    fullName,
    businessName,
    email,
    phone: body.phone?.trim() || "",
    projectType,
    deployment: body.deployment?.trim() || "yes",
    deadline,
    notes: body.notes?.trim() || "",
    createdAt: new Date().toISOString(),
  };

  try {
    await mkdir(DATA_DIR, { recursive: true });

    let existing: unknown[] = [];

    try {
      const raw = await readFile(DATA_FILE, "utf8");
      existing = JSON.parse(raw) as unknown[];
    } catch {
      existing = [];
    }

    const nextEntries = Array.isArray(existing) ? [...existing, submission] : [submission];
    await writeFile(DATA_FILE, JSON.stringify(nextEntries, null, 2), "utf8");

    return NextResponse.json({
      message:
        "Project request received. We will review the scope and follow up through email.",
    });
  } catch {
    return NextResponse.json(
      {
        message:
          "Your form could not be stored right now. Email admin@fullheartenterprises.com and we will help directly.",
      },
      { status: 500 },
    );
  }
}
