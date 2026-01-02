// Google Apps Script for Form Submission to Google Sheets
//
// SETUP INSTRUCTIONS:
// 1. Go to https://script.google.com/
// 2. Create a new project
// 3. Paste this code
// 4. Click "Deploy" > "New deployment"
// 5. Select "Web app" as deployment type
// 6. Set "Execute as" to "Me"
// 7. Set "Who has access" to "Anyone"
// 8. Click "Deploy"
// 9. Copy the Web App URL and replace 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE' in Hero.jsx
//
// GOOGLE SHEET SETUP:
// 1. Create a new Google Sheet
// 2. Name it "Orvea Estates Leads"
// 3. In the first row, add headers: Name | Phone | Email | Timestamp
// 4. Copy the Sheet ID from the URL (the long string between /d/ and /edit)
// 5. Replace 'YOUR_SHEET_ID_HERE' below with your Sheet ID

function doPost(e) {
  try {
    // Replace with your Google Sheet ID
    const SHEET_ID = 'YOUR_SHEET_ID_HERE';
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();

    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);

    // Append the data to the sheet
    sheet.appendRow([
      data.name,
      data.phone,
      data.email,
      data.timestamp
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: 'Data saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional)
function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        name: 'Test User',
        phone: '+91 99111 14978',
        email: 'test@example.com',
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      })
    }
  };

  const result = doPost(testData);
  Logger.log(result.getContent());
}
