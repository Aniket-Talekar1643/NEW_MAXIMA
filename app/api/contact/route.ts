import { NextRequest, NextResponse } from "next/server";
import { SendMailClient } from "zeptomail";
import handlebars from "handlebars";

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, subject, message, token } = await req.json();

    if (!fullName || !email || !subject || !message || !token) {
      return NextResponse.json(
        { success: false, message: "Required fields missing" },
        { status: 400 },
      );
    }

    const recaptchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      },
    );

    const recaptchaJson = await recaptchaRes.json();

    if (!recaptchaJson.success || recaptchaJson.score < 0.5) {
      return NextResponse.json(
        { message: "reCAPTCHA verification failed" },
        { status: 400 },
      );
    }

    const template = handlebars.compile(`<html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Maxima Business Solutions: Contact Us</title>
            <style>
              body {
                font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                margin: 0;
                padding: 0;
                color: #333;
              }

              .container {
                max-width: 600px;
                margin: 30px auto;
                background-color: #ffffff;
                padding: 30px;
                border-radius: 8px;
                border: 1px solid #e0e0e0;
              }

              .logo {
                text-align: center;
                margin-bottom: 25px;
              }

              .logo img {
                max-height: 60px;
              }

              .header {
                text-align: center;
                font-size: 22px;
                font-weight: 600;
                color: #2c3e50;
                margin-bottom: 20px;
              }

              .content {
                font-size: 16px;
                line-height: 1.6;
              }

              .content p {
                margin: 10px 0;
              }

              .message-box {
                background-color: #f8f8f8;
                border-left: 4px solid #3498db;
                padding: 12px;
                border-radius: 4px;
                margin-top: 10px;
              }

              .footer {
                text-align: center;
                font-size: 12px;
                color: #777;
                margin-top: 30px;
              }

              .footer a {
                color: #777;
                text-decoration: none;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="logo">
                <img src="https://www.maximabs.com/logo.png" alt="Maxima Business Solutions" />
              </div>

              <div class="header">Contact Form Submission</div>

              <div class="content">
                <p>A new form has been submitted with the following details:</p>
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>

                <div class="message-box">
                  <p><strong>Subject:</strong> ${subject}</p>
                  <p><strong>Message:</strong></p>
                  <p>${message}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
`);

    const htmlToSend = template({
      fullName,
      email,
      subject,
      message,
    });

    const client = new SendMailClient({
      url: process.env.MAIL_URL!,
      token: process.env.MAIL_TOKEN!,
    });

    await client.sendMail({
      from: {
        address: process.env.EMAIL_FROM!,
        name: "No Reply",
      },
      reply_to: [
        {
          address: email,
          name: fullName,
        },
      ],
      to: [
        {
          email_address: {
            address: process.env.EMAIL_ADMIN!,
            name: "Admin",
          },
        },
      ],
      subject: "New Contact Form Submission",
      htmlbody: htmlToSend,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error: any) {
    console.error("ZeptoMail Error:", error.error?.details || error);
    return NextResponse.json(
      { success: false, message: "Email sending failed" },
      { status: 500 },
    );
  }
}
