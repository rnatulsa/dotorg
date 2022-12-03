import { client } from './client'
import ROLE_WEIGHTS from '@/../data/role-weights'

export async function fetchEvents(query = {}) {
  const items = await client.getEntriesCachedItems({
    content_type: 'event',
    ...query
  })

  return items
}

export async function fetchBusinesses() {
  const items = await client.getEntriesCachedItems({
    content_type: 'business'
  })

  return items
}

export async function fetchBoardMembers() {
  const DEFAULT_ROLE_WEIGHT = Math.max(...Object.values(ROLE_WEIGHTS)) + 1

  const items = await client.getEntriesCachedItems({
    content_type: 'boardMember'
  })

  const mapped = items.map((item) => {
    const member = item.fields
    member.weight = member.roles.reduce((prev, curr) => {
      return Math.min(ROLE_WEIGHTS[curr] ?? prev, prev)
    }, DEFAULT_ROLE_WEIGHT)

    if (member.photo) {
      member.photo = member.photo.fields
    }

    return member
  })

  mapped.sort((a, b) => (
    (a.weight === b.weight)
      ? a.name.localeCompare(b.name)
      : a.weight - b.weight
  ))

  return mapped
}

export default { fetchBusinesses }
