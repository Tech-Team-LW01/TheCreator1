// utils/emailTemplates.ts

interface ApplicationData {
    fullName: string;
    whatsappNo: string;
    emailAddress: string;
    collegeName: string;
    branch: string;
    currentSemester: string;
    applyingFor: string;
    tentativeDates: string;
    referenceName?: string;
    source: string;
    query?: string;
  }
  
  export const getApplicationEmailTemplate = (data: ApplicationData) => `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Application Submission</title>
        <style>
          /* Reset styles */
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f5f5f5;
          }
  
          /* Container styles */
          .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
  
          /* Header styles */
          .header {
            background-color: #dc2626;
            color: #ffffff;
            padding: 20px;
            text-align: center;
          }
  
          .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: bold;
          }
  
          .header p {
            margin: 5px 0 0;
            font-size: 16px;
            opacity: 0.9;
          }
  
          /* Content styles */
          .content {
            padding: 30px;
          }
  
          .section {
            margin-bottom: 25px;
          }
  
          .section-title {
            font-size: 18px;
            font-weight: bold;
            color: #dc2626;
            margin-bottom: 15px;
            border-bottom: 2px solid #dc2626;
            padding-bottom: 5px;
          }
  
          .field {
            margin-bottom: 15px;
            padding: 10px;
            background-color: #f8f8f8;
            border-radius: 4px;
          }
  
          .field-label {
            font-weight: bold;
            color: #666666;
            display: block;
            margin-bottom: 5px;
          }
  
          .field-value {
            color: #333333;
          }
  
          /* Footer styles */
          .footer {
            background-color: #f8f8f8;
            padding: 20px;
            text-align: center;
            font-size: 14px;
            color: #666666;
          }
  
          .footer img {
            max-width: 150px;
            margin-bottom: 10px;
          }
  
          /* Responsive styles */
          @media only screen and (max-width: 600px) {
            .email-container {
              margin: 10px;
            }
  
            .header {
              padding: 15px;
            }
  
            .content {
              padding: 20px;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1>New Application Submission</h1>
            <p>Summer Program 2025</p>
          </div>
  
          <div class="content">
            <div class="section">
              <div class="section-title">Personal Information</div>
              <div class="field">
                <span class="field-label">Full Name</span>
                <span class="field-value">${data.fullName}</span>
              </div>
              <div class="field">
                <span class="field-label">WhatsApp Number</span>
                <span class="field-value">${data.whatsappNo}</span>
              </div>
              <div class="field">
                <span class="field-label">Email Address</span>
                <span class="field-value">${data.emailAddress}</span>
              </div>
            </div>
  
            <div class="section">
              <div class="section-title">Academic Information</div>
              <div class="field">
                <span class="field-label">College Name</span>
                <span class="field-value">${data.collegeName}</span>
              </div>
              <div class="field">
                <span class="field-label">Branch</span>
                <span class="field-value">${data.branch}</span>
              </div>
              <div class="field">
                <span class="field-label">Current Semester</span>
                <span class="field-value">${data.currentSemester}</span>
              </div>
            </div>
  
            <div class="section">
              <div class="section-title">Program Details</div>
              <div class="field">
                <span class="field-label">Applying For</span>
                <span class="field-value">${data.applyingFor}</span>
              </div>
              <div class="field">
                <span class="field-label">Tentative Dates</span>
                <span class="field-value">${data.tentativeDates}</span>
              </div>
            </div>
  
            <div class="section">
              <div class="section-title">Additional Information</div>
              <div class="field">
                <span class="field-label">Reference Name</span>
                <span class="field-value">${data.referenceName || 'Not provided'}</span>
              </div>
              <div class="field">
                <span class="field-label">Source</span>
                <span class="field-value">${data.source}</span>
              </div>
              ${data.query ? `
              <div class="field">
                <span class="field-label">Query</span>
                <span class="field-value">${data.query}</span>
              </div>
              ` : ''}
            </div>
          </div>
  
          <div class="footer">
            <img src="https://your-logo-url.com/logo.png" alt="Linux World Logo">
            <p>© ${new Date().getFullYear()} Linux World. All rights reserved.</p>
            <p>This is an automated email. Please do not reply.</p>
          </div>
        </div>
      </body>
    </html>
  `;
  