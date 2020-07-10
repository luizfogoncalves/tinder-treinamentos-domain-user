"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _v = _interopRequireDefault(require("uuid/v4"));

var _dynamoose = _interopRequireDefault(require("dynamoose"));

var yup = _interopRequireWildcard(require("yup"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var {
  Schema
} = _dynamoose.default;
var schema = new Schema({
  id: {
    type: String,
    hashKey: true,
    required: true,

    default(model) {
      return (0, _v.default)();
    },

    validate(v, m) {
      return yup.string().isValidSync(v);
    }

  },
  email: {
    type: String,
    required: true,
    lowercase: true,

    validate(v, m) {
      return yup.string().email().isValidSync(v);
    }

  },
  name: {
    required: true,

    validate(v, m) {
      return yup.string().isValidSync(v);
    }

  },
  password: {
    required: true,

    validate(v, m) {
      return yup.string().isValidSync(v);
    }

  },
  active: {
    type: Boolean,
    default: true,

    validate(v, m) {
      return yup.boolean().isValidSync(v);
    }

  },
  createdAt: {
    type: String,

    default(model) {
      return new Date().toISOString();
    },

    validate(v, m) {
      return yup.string().isValidSync(v);
    }

  },
  updatedAt: {
    type: String,

    default(model) {
      return new Date().toISOString();
    },

    validate(v, m) {
      return yup.string().isValidSync(v);
    }

  }
});
var _default = schema;
exports.default = _default;
//# sourceMappingURL=schema.js.map