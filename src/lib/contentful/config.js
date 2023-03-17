import { INLINES } from '@contentful/rich-text-types'

const CONTENTFUL_PREVIEW = (process.env.CONTENTFUL_PREVIEW || '').trim().toLowerCase()
const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID
const CONTENTFUL_DELIVERY_ACCESS_TOKEN = process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN
const CONTENTFUL_PREVIEW_ACCESS_TOKEN = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN

export const preview = !['', '0', 'f', 'false', 'n', 'no', 'off'].includes(CONTENTFUL_PREVIEW)
export const access_token = preview ? CONTENTFUL_PREVIEW_ACCESS_TOKEN : CONTENTFUL_DELIVERY_ACCESS_TOKEN
export const host = preview ? 'preview.contentful.com' : 'cdn.contentful.com'
export const space_id = CONTENTFUL_SPACE_ID

const renderOptions = {
  renderNode: {
    [INLINES.ASSET_HYPERLINK]: (node, children) => {
      if (!node) {
        return
      }

      const { file, title } = node.data.target.fields
      const aProps = {}
      if (Boolean(file.contentType.match(/^application\/pdf($|;)/i))) {
        aProps.download = file.fileName
        aProps.target = '_blank'
      }

      return <a href={file.url} title={title} {...aProps}>{children}</a>
    },
  }
}

export const config = { preview, access_token, host, space_id, renderOptions }
export default config
