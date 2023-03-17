import { createClient } from 'contentful'
import config from './config'
import crypto from 'crypto'
import path from 'path'
import { readFile, writeFile } from 'fs/promises'

const cache = {}

export const client = createClient({
  space: config.space_id,
  accessToken: config.access_token,
  host: config.host
})

client.getEntriesCachedItems = async function () {
  const args_json = JSON.stringify(arguments)
  const md5Hasher = crypto.createHmac('md5', 'not a secret');
  const json_hash = md5Hasher.update(args_json).digest('hex');
  const key = `entries-items-${json_hash}`
  const file_name = path.join(__dirname, '..', '..', '..', 'data', 'contentful', `${key}.json`)

  try {
    const contents = cache[key] ?? (cache[key] = await readFile(file_name))
    return JSON.parse(contents)
  } catch (error) {
    const entries = await client.getEntries(...arguments)
    cache[key] = JSON.stringify(entries.items)
    writeFile(file_name, cache[key])
    return entries.items
  }
}

export default client
