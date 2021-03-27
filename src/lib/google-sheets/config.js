module.exports = {
  credentials: JSON.parse(Buffer.from(process.env.GOOGLE_APPLICATION_CREDENTIAL_BODY, 'base64')),
  emailList: {
    spreadsheetId: process.env.GOOGLE_SHEET_ID_EMAIL_LIST,
    spreadsheetTab: 'Raw Input',
  },
  messages: {
    spreadsheetId: process.env.GOOGLE_SHEET_ID_MESSAGES,
    spreadsheetTab: 'Raw Input',
  },
}
