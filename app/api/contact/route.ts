import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        // Zepto Mail API Configuration
        const url = "https://api.zeptomail.in/v1.1/email";
        const token = process.env.ZEPTOMAIL_TOKEN;
        const fromEmail = process.env.ZEPTOMAIL_FROM_EMAIL;
        const destinationEmail = process.env.CONTACT_DESTINATION_EMAIL;

        if (!token || !fromEmail || !destinationEmail) {
            console.error("Missing Zepto Mail configuration");
            return NextResponse.json(
                { error: "Email service not configured" },
                { status: 500 }
            );
        }

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token.startsWith("ZohoToken") ? token : `ZohoToken ${token}`,
            },
            body: JSON.stringify({
                from: {
                    address: fromEmail,
                    name: "Maxima Business Solutions - Contact Form",
                },
                to: [
                    {
                        email_address: {
                            address: destinationEmail,
                            name: "Maxima Admin",
                        },
                    },
                ],
                subject: `New Contact Enquiry: ${subject}`,
                htmlbody: `
                    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
                        <div style="background-color: #000; color: #fff; padding: 24px; text-align: center;">
                            <h2 style="margin: 0; font-size: 24px;">New Enquiry Received</h2>
                        </div>
                        <div style="padding: 32px; background-color: #fff;">
                            <p style="margin-bottom: 24px; color: #475569; font-size: 16px; line-height: 1.6;">
                                You have received a new message from your website contact form.
                            </p>
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px; width: 120px;">Name</td>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 600;">${name}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Email</td>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 600;">${email}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Subject</td>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 600;">${subject}</td>
                                </tr>
                            </table>
                            <div style="margin-top: 32px; padding: 24px; background-color: #f8fafc; border-radius: 8px;">
                                <h4 style="margin: 0 0 12px 0; color: #0f172a; font-size: 14px;">Message:</h4>
                                <p style="margin: 0; color: #334155; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                            </div>
                        </div>
                        <div style="padding: 16px; background-color: #f1f5f9; text-align: center; color: #94a3b8; font-size: 12px;">
                            This is an automated notification from Maxima Business Solutions website.
                        </div>
                    </div>
                `,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Zepto Mail Error:", errorData);
            return NextResponse.json(
                { error: "Failed to send email" },
                { status: response.status }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
