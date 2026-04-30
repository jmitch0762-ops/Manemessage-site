import { NextRequest, NextResponse } from "next/server";

const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
const GROUP_ID = "186194407330940357";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;

    // Validate email is present
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Validate API key is configured
    if (!MAILERLITE_API_KEY) {
      console.error("MAILERLITE_API_KEY is not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Build the subscriber payload for MailerLite
    const subscriberPayload: {
      email: string;
      groups: string[];
      fields?: { name: string };
    } = {
      email: email.trim().toLowerCase(),
      groups: [GROUP_ID],
    };

    // Only include name field if it was provided
    if (name && typeof name === "string" && name.trim().length > 0) {
      subscriberPayload.fields = { name: name.trim() };
    }

    // Call MailerLite API
    const mailerLiteResponse = await fetch(
      "https://connect.mailerlite.com/api/subscribers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${MAILERLITE_API_KEY}`,
        },
        body: JSON.stringify(subscriberPayload),
      }
    );

    if (!mailerLiteResponse.ok) {
      const errorBody = await mailerLiteResponse.text();
      console.error("MailerLite API error:", mailerLiteResponse.status, errorBody);
      return NextResponse.json(
        { error: "Failed to subscribe. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe route error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
