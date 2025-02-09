// app/api/submit-application/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dbConnect from '@/lib/mongodb';
import Application from '../../../../models/Application';
import { getApplicationEmailTemplate } from '../../../../utils/emailTemplates';

export async function POST(req: Request) {
  try {
    // Connect to database
    await dbConnect();

    // Get form data
    const formData = await req.json();
    console.log('Received form data:', formData);

    // Save to database
    const application = new Application(formData);
    await application.save();
    console.log('Application saved to database');

    // Configure email transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Send email to admin
    await transporter.sendMail({
      from: `"Summer Program" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Summer Program Application - ${formData.fullName}`,
      html: getApplicationEmailTemplate(formData),
    });

    // Send confirmation email to applicant
    await transporter.sendMail({
      from: `"Summer Program" <${process.env.SMTP_USER}>`,
      to: formData.emailAddress,
      subject: 'Application Received - Summer Program',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #dc2626;">Thank You for Your Application</h2>
          <p>Dear ${formData.fullName},</p>
          <p>We have received your application for the Summer Program. Our team will review your application and get back to you soon.</p>
          <p>Application Details:</p>
          <ul>
            <li>Program: ${formData.applyingFor === 'others' ? formData.otherSpecification : formData.applyingFor}</li>
            <li>Tentative Dates: ${formData.tentativeDates}</li>
          </ul>
          <p>If you have any questions, feel free to contact us.</p>
          <p>Best regards,<br>Summer Program Team</p>
        </div>
      `,
    });

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