// app/api/submit-application/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dbConnect from '@/lib/mongodb';
import Application from '../../../../models/Application';
import { getApplicationEmailTemplate } from '../../../../utils/emailTemplates';

// Use named export for POST method
export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }

  try {
    const formData = await req.json();

    // Connect to MongoDB
    await dbConnect();

    // Save to MongoDB
    const application = new Application(formData);
    await application.save();

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER || '  ',
        pass: process.env.SMTP_PASSWORD || '  ',
      },
    });

    // Create email content
    const mailOptions = {
      from: `"Summer Program" <${process.env.SMTP_USER}>`,
      to: 'preeti.chandak@lwindia.com',
      subject: 'New Summer Program Application',
      html: getApplicationEmailTemplate(formData),
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Application submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { message: 'Error submitting application' },
      { status: 500 }
    );
  }
}

// Optionally, add other HTTP methods if needed
export async function GET() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}