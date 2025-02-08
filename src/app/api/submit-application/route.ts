  // // app/api/submit-application/route.ts
  // import { NextResponse } from 'next/server';
  // import nodemailer from 'nodemailer';
  // import dbConnect from '@/lib/mongodb';
  // import Application from '../../../../models/Application';
  // import { getApplicationEmailTemplate } from '../../../../utils/emailTemplates';

  // // Use named export for POST method
  // export async function POST(req: Request) {
  //   if (req.method !== 'POST') {
  //     return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  //   }

  //   try {
  //     const formData = await req.json();

  //     // Connect to MongoDB
  //     await dbConnect();

  //     // Save to MongoDB
  //     const application = new Application(formData);
  //     await application.save();

  //     // Configure nodemailer
  //     const transporter = nodemailer.createTransport({
  //       host: 'smtp.gmail.com',
  //       port: 587,
  //       secure: false,
  //       auth: {
  //         user: process.env.SMTP_USER || '  ',
  //         pass: process.env.SMTP_PASSWORD || '  ',
  //       },
  //     });

  //     // Create email content
  //     const mailOptions = {
  //       from: `"Summer Program" <${process.env.SMTP_USER}>`,
  //       to: 'preeti.chandak@lwindia.com',
  //       subject: 'New Summer Program Application 2025',
  //       html: getApplicationEmailTemplate(formData),
  //     };

  //     // Send email
  //     await transporter.sendMail(mailOptions);

  //     return NextResponse.json(
  //       { message: 'Application submitted successfully' },
  //       { status: 200 }
  //     );
  //   } catch (error) {
  //     console.error('Error:', error);
  //     return NextResponse.json(
  //       { message: 'Error submitting application' },
  //       { status: 500 }
  //     );
  //   }
  // }

  // // Optionally, add other HTTP methods if needed
  // export async function GET() {
  //   return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  // }











  // app/api/submit-application/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dbConnect from '@/lib/mongodb';
import Application from '../../../../models/Application';
import { getApplicationEmailTemplate } from '../../../../utils/emailTemplates';

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }

  try {
    // Parse form data
    const formData = await req.json();
    console.log('Received form data:', formData);

    // Connect to MongoDB
    console.log('Connecting to MongoDB...');
    await dbConnect();
    console.log('MongoDB connection successful');

    // Save to MongoDB
    console.log('Saving application to database...');
    const application = new Application(formData);
    await application.save();
    console.log('Application saved successfully');

    // Configure nodemailer
    console.log('Configuring email transport...');
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false // Only use in development
      }
    });

    // Verify email configuration
    try {
      await transporter.verify();
      console.log('Email configuration verified');
    } catch (emailVerifyError) {
      console.error('Email verification failed:', emailVerifyError);
      throw new Error('Email configuration error');
    }

    // Create email content
    const mailOptions = {
      from: `"Summer Program" <${process.env.SMTP_USER}>`,
      to: 'preeti.chandak@lwindia.com',
      subject: 'New Summer Program Application 2025',
      html: getApplicationEmailTemplate(formData),
    };

    // Send email
    console.log('Sending email...');
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');

    return NextResponse.json(
      { 
        message: 'Application submitted successfully',
        applicationId: application._id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error in submit-application:', error);

    // Determine error type and send appropriate response
    if (error instanceof Error) {
      if (error.message.includes('MongoDB')) {
        return NextResponse.json(
          { message: 'Database connection error', details: error.message },
          { status: 500 }
        );
      } else if (error.message.includes('email')) {
        return NextResponse.json(
          { message: 'Email sending failed', details: error.message },
          { status: 500 }
        );
      }
    }

    // Generic error response
    return NextResponse.json(
      { 
        message: 'Error submitting application',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Validate environment variables
const validateEnvVariables = () => {
  const requiredVars = [
    'SMTP_HOST',
    'SMTP_PORT',
    'SMTP_USER',
    'SMTP_PASSWORD',
    'MONGODB_URI'
  ];

  for (const varName of requiredVars) {
    if (!process.env[varName]) {
      console.error(`Missing required environment variable: ${varName}`);
    }
  }
};

// Run validation on startup
validateEnvVariables();

export async function GET() {
  return NextResponse.json(
    { message: 'GET method not allowed for this endpoint' },
    { status: 405 }
  );
}

// Add OPTIONS method for CORS if needed
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}