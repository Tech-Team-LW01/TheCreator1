








import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function getApplicationEmailTemplate(formData: any) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px;">
      <h2 style="color:#dc2626">TheCreator.one New Summer Program Application</h2>
      <ul>
        <li><b>Name:</b> ${formData.fullName}</li>
        <li><b>WhatsApp No:</b> ${formData.whatsappNo}</li>
        <li><b>Email:</b> ${formData.emailAddress}</li>
        <li><b>College:</b> ${formData.collegeName}</li>
        <li><b>Branch:</b> ${formData.branch}</li>
        <li><b>Passing Year:</b> ${formData.currentSemester}</li>
        <li><b>Program:</b> ${formData.applyingFor === "others" ? formData.otherSpecification : formData.applyingFor}</li>
        <li><b>Tentative Dates:</b> ${formData.tentativeDates}</li>
        <li><b>Reference Name:</b> ${formData.referenceName || "-"}</li>
        <li><b>Source:</b> ${formData.source}</li>
        <li><b>Query:</b> ${formData.query || "-"}</li>
      </ul>
    </div>
  `;
}

export async function POST(req: Request) {
  try {
    const formData = await req.json();
    console.log("Received form data:", formData);

    // 1. Send email using nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Admin receives full details
    await transporter.sendMail({
      from: `"Summer Program" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Summer Program Application - ${formData.fullName}`,
      html: getApplicationEmailTemplate(formData),
    });

    // Applicant receives thank-you confirmation
    await transporter.sendMail({
      from: `"Summer Program" <${process.env.SMTP_USER}>`,
      to: formData.emailAddress,
      subject: 'Application Received - Summer Program',
      html: `
        <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto; padding:20px;">
          <h2 style="color:#dc2626;">Thank You for Your Application</h2>
          <p>Dear ${formData.fullName},</p>
          <p>We have received your application for the <b>Summer Program</b>. Our team will review your application and get back to you soon.</p>
          <p><b>Your Application Details:</b></p>
          <ul>
            <li><b>Program:</b> ${formData.applyingFor === "others" ? formData.otherSpecification : formData.applyingFor}</li>
            <li><b>Tentative Dates:</b> ${formData.tentativeDates}</li>
          </ul>
          <p>If you have any questions, feel free to contact us.</p>
          <p><b>Best regards,<br/>Summer Program Team</b></p>
        </div>
      `,
    });

    // 2. Submit to Google Sheets via Google Apps Script
    try {
      // Google Apps Script URL from environment variable or hardcoded if needed
      const scriptURL = process.env.GOOGLE_APPS_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbz4qmib361R5TtJ4Sofhus-k5KtX7Z_7lxEzYI5jhZryvPIwS4zhUGYKr3WqqF2_KDo/exec';
      
      // Send all form field data to Google Apps Script
      const response = await fetch(scriptURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          fullName: formData.fullName || "",
          emailAddress: formData.emailAddress || "",
          whatsappNo: formData.whatsappNo || "",
          collegeName: formData.collegeName || "",
          branch: formData.branch || "",
          currentSemester: formData.currentSemester || "",
          passingYear: formData.currentSemester || "", // Using the same field for consistency
          applyingFor: formData.applyingFor || "",
          otherSpecification: formData.otherSpecification || "",
          tentativeDates: formData.tentativeDates || "",
          referenceName: formData.referenceName || "",
          source: formData.source || "",
          query: formData.query || ""
        }).toString(),
      });
      
      if (!response.ok) {
        console.error('Google Sheets submission error:', await response.text());
        throw new Error('Failed to submit to Google Sheets');
      }
      
      console.log('Data successfully saved to Google Sheets');
      
    } catch (sheetsError) {
      console.error('Error saving to Google Sheets:', sheetsError);
      // Continue processing even if Google Sheets update fails
      // We don't want to fail the entire submission if only the sheets part fails
    }

    return NextResponse.json(
      { message: 'Application submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      {
        message: 'Failed to submit application',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}