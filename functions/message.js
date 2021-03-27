const { getAuthToken } = require('../src/lib/google-sheets/service')
const { credentials, messages: {spreadsheetId, spreadsheetTab} } = require('../src/lib/google-sheets/config')
const { messageSubmit } = require('../src/lib/google-sheets/data')

async function main({name, email, message}) {
  const auth = await getAuthToken({credentials})
  return await messageSubmit({auth, spreadsheetId, spreadsheetTab, name, email, message})
}

function error(err, statusCode = 500) {
  return {
    body: err.toString(),
    headers: { 'Content-Type': 'application/json' },
    statusCode
  }
}

function ok(data, statusCode = 200) {
  return {
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
    statusCode
  }
}

exports.handler = async (event, _context, _callback) => main(JSON.parse(event.body)).then(ok).catch(error)
