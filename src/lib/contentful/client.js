import { createClient } from 'contentful'
import config from './config'

export const client = createClient({
  space: config.space_id,
  accessToken: config.deploy_access_token
})

export default client
