"use strict";

var _Model = _interopRequireDefault(require("../Model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('Users', () => {
  it('should save user with email wrong',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    var user = new _Model.default({
      email: 'lfgoncalves@stefanini.com',
      name: 'Luiz Fernando',
      password: 'luiz'
    });

    try {
      yield user.save();
      testUsers.push(user);
    } catch (err) {
      expect(err).toBeDefined();
    }
  }));
});
//# sourceMappingURL=Model.spec.js.map