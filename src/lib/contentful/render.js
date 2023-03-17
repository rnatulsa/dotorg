import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import config from './config'

export const renderComponents =
  (content, options = config.renderOptions) =>
    documentToReactComponents(content, options)

export const render = { renderComponents, documentToHtmlString, documentToReactComponents }
export default render
