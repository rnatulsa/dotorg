import { client } from './client'

export async function fetchBusinesses() {
  const entries = await client.getEntries({
    content_type: 'business'
  })

  return entries.items
}

export async function fetchBoardMembers() {
  const ROLE_WEIGHTS = {
    'President': 0,
    'Vice President': 1,
    'Treasurer': 2,
    'Secretary': 3,
    'Historian': 4,
    'Member At-Large': 5,
  }
  const DEFAULT_ROLE_WEIGHT = Math.max(...Object.values(ROLE_WEIGHTS)) + 1

  const entries = await client.getEntries({
    content_type: 'boardMember'
  })

  const mapped = entries.items.map((item) => {
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
