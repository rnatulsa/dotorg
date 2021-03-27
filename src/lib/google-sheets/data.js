const { DateTime } = require('luxon')
const { appendSpreadSheetValues } = require('./service.js')

const zone = 'America/Chicago'
const format = 'M/d/yyyy h:mm:ss'

const submitted = () => DateTime.local().setZone(zone).toFormat(format)

async function emailListSubmit({auth, spreadsheetId, spreadsheetTab, name, email}) {
  const sheetName = spreadsheetTab
  const values = [
    [submitted(), name, email]
  ]

  const response = await appendSpreadSheetValues({spreadsheetId, sheetName, auth, values})

  return response
}

async function messageSubmit({auth, spreadsheetId, spreadsheetTab, name, email, message}) {
  const sheetName = spreadsheetTab
  const values = [
    [submitted(), name, email, message]
  ]

  const response = await appendSpreadSheetValues({spreadsheetId, sheetName, auth, values})

  return response
}

module.exports = {
  emailListSubmit,
  messageSubmit,
}
