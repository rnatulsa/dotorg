import path from 'path'
import { writeFile } from 'fs/promises'
import { fetchRedirects } from './entries'

const mediaTarget = (media) => media && `https:${media.fields.file.url}`
const entryTarget = (entry) => {
  if (!entry) return

  const contentType = entry.sys.contentType.sys.id
  const slug = entry.fields.slug

  return `/${contentType}/${slug}`
}
const urlTarget = (url) => url

export async function writeRedirects() {
  const file_name = path.join(__dirname, '..', '..', '..', 'public', '_redirects.contentful')
  const redirects = await fetchRedirects()

  const data = redirects.map(redirect => {
    const { alias, code, media, entry, url } = redirect.fields
    const statusCode = code.split(' ')[0]
    const target = mediaTarget(media) || entryTarget(entry) || urlTarget(url)

    if (!target) {
      throw new Error(`invalid target: ${target}`)
    }

    return { alias, target, statusCode }
  })

  const output = data.map(({ alias, target, statusCode }) => [`/${alias}`, target, `${statusCode}!`].join(' ')).join('\n')

  await writeFile(file_name, output)
}
