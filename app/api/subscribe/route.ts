import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email || !email.includes("@")) {
            return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
        }

        const filePath = path.join(process.cwd(), "subscriptions.txt");
        const entry = `${new Date().toISOString()} - ${email}\n`;

        // Append email to file
        fs.appendFileSync(filePath, entry);

        return NextResponse.json({ message: "Subscription successful" }, { status: 200 });
    } catch (error) {
        console.error("Subscription error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
