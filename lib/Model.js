"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dynamoose = _interopRequireDefault(require("dynamoose"));

var _schema = _interopRequireDefault(require("./schema"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dynamoose.default.AWS.config.update({
  region: _config.default.REGION
});

var Model = _dynamoose.default.model(_config.default.USERS_TABLE, _schema.default, {
  create: true,
  update: true
});

var _default = Model;
exports.default = _default;
//# sourceMappingURL=Model.js.map