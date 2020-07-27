import v4 from 'uuid/v4'
import dynamoose from 'dynamoose'
import * as yup from 'yup'

const { Schema } = dynamoose

const schema = new Schema({
  id: {
    type: String,
    hashKey: true,
    required: true,
    default(model) {
      return v4()
    },
    validate(v, m) {
      return yup.string().isValidSync(v)
    },
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    validate(v, m) {
      return yup
        .string()
        .email()
        .isValidSync(v)
    },
  },
  name: {
    type: String,
    required: true,
    validate(v, m) {
      return yup
        .string()
        .isValidSync(v)
    },
  },
  password: {
    type: String,
    required: true,
    validate(v, m) {
      return yup
        .string()
        .isValidSync(v)
    },
  },
  active: {
    type: Boolean,
    default: true,
    validate(v, m) {
      return yup.boolean().isValidSync(v)
    },
  },
  createdAt: {
    type: String,
    default(model) {
      return new Date().toISOString()
    },
    validate(v, m) {
      return yup.string().isValidSync(v)
    },
  },
  updatedAt: {
    type: String,
    default(model) {
      return new Date().toISOString()
    },
    validate(v, m) {
      return yup.string().isValidSync(v)
    },
  },
})

export default schema
