import { client } from './client'

export async function fetchBusinesses() {
  const entries = await client.getEntries({
    content_type: 'business'
  })

  return entries.items
}

export default { fetchBusinesses }
