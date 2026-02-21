import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      inquiryTypes: formData.get("inquiryTypes"),
      message: formData.get("message"),
      // document: formData.get("document"), // Handle file upload as needed
    };

    // -------------------------------------------------------
    // Placeholder: Replace with your preferred email service
    // (e.g., SendGrid, Postmark, AWS SES, or a CRM webhook)
    // -------------------------------------------------------
    console.log("Contact form submission:", data);

    // Example: Send to an email API
    // await sendEmail({
    //   to: "yash@mehrotralaw.com",
    //   subject: `New Inquiry from ${data.firstName} ${data.lastName}`,
    //   body: JSON.stringify(data, null, 2),
    // });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
