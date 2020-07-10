import dynamoose from 'dynamoose'
import schema from './schema'
import config from './config'

dynamoose.AWS.config.update({
  region: config.REGION,
})

const Model = dynamoose.model(config.USERS_TABLE, schema, {
  create: true,
  update: true,
})

export default Model
