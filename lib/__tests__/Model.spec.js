"use strict";

var _Model = _interopRequireDefault(require("../Model"));

var _domainEndpoint = require("@rota95/domain-endpoint");

var _v = _interopRequireDefault(require("uuid/v4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var testUsers = [];
var testEnpoints = [];
beforeAll(
/*#__PURE__*/
_asyncToGenerator(function* () {
  var endpoint = yield _domainEndpoint.EndpointModel.scan().exec();
  testEnpoints = [...endpoint];
}));
describe('Users', () => {
  it('should create class without properties', () => {
    var user = new _Model.default();
    expect(user).toBeDefined();
  });
  it('should create class define properties', () => {
    var user = new _Model.default({
      email: 'teste@email.com',
      active: true
    });
    expect(user).toBeDefined();
    expect(user).not.toHaveProperty('id');
    expect(user).not.toHaveProperty('endpoints');
    expect(user).toHaveProperty('active');
    expect(user).toHaveProperty('email');
    expect(user).not.toHaveProperty('createdAt');
    expect(user).not.toHaveProperty('updatedAt');
  });
  it('should save user with email wrong',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    var user = new _Model.default({
      email: 'teste'
    });

    try {
      yield user.save();
      testUsers.push(user);
    } catch (err) {
      expect(err).toBeDefined();
    }
  }));
  it('should save user without email',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    var user = new _Model.default({
      email: 'teste'
    });

    try {
      yield user.save();
      testUsers.push(user);
    } catch (err) {
      expect(err).toBeDefined();
    }
  }));
  it('should save user and add endpoint',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    var user = new _Model.default({
      email: 'teste@email.com',
      active: true
    });
    yield user.save();
    user.addEndpoint(testEnpoints[0].id);
    testUsers.push(user);
    expect(user).toBeDefined();
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('email');
    expect(user).toHaveProperty('endpoints');
    expect(user).toHaveProperty('active');
    expect(user).toHaveProperty('createdAt');
    expect(user).toHaveProperty('updatedAt');
  }));
  it('should save user and remove endpoint',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    var user = new _Model.default({
      email: 'teste2@email.com'
    });
    yield user.save();
    user.addEndpoint(testEnpoints[0].id);
    user.removeEndpoint(testEnpoints[0].id);
    testUsers.push(user);
    expect(user).toBeDefined();
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('email');
    expect(user).toHaveProperty('endpoints');
    expect(user).toHaveProperty('active');
    expect(user).toHaveProperty('createdAt');
    expect(user).toHaveProperty('updatedAt');
  }));
  it('should list users',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    var users = yield _Model.default.scan().exec();
    expect(users).toBeDefined();
    expect(users.length).toBeGreaterThanOrEqual(1);
  }));
  it('should get user by id',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    var id = testUsers[0].id;
    var user = yield _Model.default.get({
      id
    });
    expect(user).toBeDefined();
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('email');
    expect(user).toHaveProperty('endpoints');
    expect(user).toHaveProperty('active');
    expect(user).toHaveProperty('createdAt');
    expect(user).toHaveProperty('updatedAt');
  }));
  it('should exist contracts property',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    var user = new _Model.default({
      email: 'teste2@email.com'
    });
    yield user.save();
    testUsers.push(user);
    expect(user).toBeDefined();
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('email');
    expect(user).toHaveProperty('endpoints');
    expect(user).toHaveProperty('active');
    expect(user).toHaveProperty('contracts');
    expect(user).toHaveProperty('createdAt');
    expect(user).toHaveProperty('updatedAt');
  }));
  it('should add contract by method addContract',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    var user = new _Model.default({
      email: 'teste2@email.com'
    });
    yield user.save();
    var contractId = (0, _v.default)();
    user.addContract(contractId);
    testUsers.push(user);
    expect(user).toBeDefined();
    expect(user).toHaveProperty('contracts');
    expect(user.contracts).toHaveLength(1);
    expect(user.contracts[0]).toEqual(contractId);
  }));
  it('should add contract by method validContractById',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    var user = new _Model.default({
      email: 'teste2@email.com'
    });
    yield user.save();
    var contractId = (0, _v.default)();
    user.addContract(contractId);
    var isValidContract = user.validContractById(contractId);
    testUsers.push(user);
    expect(user).toBeDefined();
    expect(user).toHaveProperty('contracts');
    expect(user.contracts).toHaveLength(1);
    expect(user.contracts[0]).toEqual(contractId);
    expect(isValidContract).toEqual(true);
  }));
  it('should add contract by method validContractById pass invalid ContractId',
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    var user = new _Model.default({
      email: 'teste2@email.com'
    });
    yield user.save();
    var contractId = (0, _v.default)();
    user.addContract(contractId);
    var isValidContract = user.validContractById((0, _v.default)());
    testUsers.push(user);
    expect(user).toBeDefined();
    expect(user).toHaveProperty('contracts');
    expect(user.contracts).toHaveLength(1);
    expect(user.contracts[0]).toEqual(contractId);
    expect(isValidContract).toEqual(false);
  }));
});
afterAll(
/*#__PURE__*/
_asyncToGenerator(function* () {
  yield Promise.all(testUsers.map(item => {
    return _Model.default.delete(item);
  }));
}));
//# sourceMappingURL=Model.spec.js.map