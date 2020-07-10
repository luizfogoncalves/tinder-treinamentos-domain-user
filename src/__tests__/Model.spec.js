import Model from '../Model'
import { EndpointModel } from '@rota95/domain-endpoint'
import v4 from 'uuid/v4'

const testUsers = []
let testEnpoints = []

beforeAll(async () => {
  const endpoint = await EndpointModel.scan().exec()
  testEnpoints = [...endpoint]
})

describe('Users', () => {
  it('should create class without properties', () => {
    const user = new Model()

    expect(user).toBeDefined()
  })

  it('should create class define properties', () => {
    const user = new Model({ email: 'teste@email.com', active: true })

    expect(user).toBeDefined()
    expect(user).not.toHaveProperty('id')
    expect(user).not.toHaveProperty('endpoints')
    expect(user).toHaveProperty('active')
    expect(user).toHaveProperty('email')
    expect(user).not.toHaveProperty('createdAt')
    expect(user).not.toHaveProperty('updatedAt')
  })

  it('should save user with email wrong', async () => {
    const user = new Model({ email: 'teste' })
    try {
      await user.save()
      testUsers.push(user)
    } catch (err) {
      expect(err).toBeDefined()
    }
  })

  it('should save user without email', async () => {
    const user = new Model({ email: 'teste' })
    try {
      await user.save()
      testUsers.push(user)
    } catch (err) {
      expect(err).toBeDefined()
    }
  })

  it('should save user and add endpoint', async () => {
    const user = new Model({ email: 'teste@email.com', active: true })

    await user.save()

    user.addEndpoint(testEnpoints[0].id)

    testUsers.push(user)

    expect(user).toBeDefined()
    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('email')
    expect(user).toHaveProperty('endpoints')
    expect(user).toHaveProperty('active')
    expect(user).toHaveProperty('createdAt')
    expect(user).toHaveProperty('updatedAt')
  })

  it('should save user and remove endpoint', async () => {
    const user = new Model({ email: 'teste2@email.com' })

    await user.save()

    user.addEndpoint(testEnpoints[0].id)

    user.removeEndpoint(testEnpoints[0].id)

    testUsers.push(user)

    expect(user).toBeDefined()
    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('email')
    expect(user).toHaveProperty('endpoints')
    expect(user).toHaveProperty('active')
    expect(user).toHaveProperty('createdAt')
    expect(user).toHaveProperty('updatedAt')
  })

  it('should list users', async () => {
    const users = await Model.scan().exec()

    expect(users).toBeDefined()
    expect(users.length).toBeGreaterThanOrEqual(1)
  })

  it('should get user by id', async () => {
    const id = testUsers[0].id

    const user = await Model.get({ id })

    expect(user).toBeDefined()
    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('email')
    expect(user).toHaveProperty('endpoints')
    expect(user).toHaveProperty('active')
    expect(user).toHaveProperty('createdAt')
    expect(user).toHaveProperty('updatedAt')
  })

  it('should exist contracts property', async () => {
    const user = new Model({ email: 'teste2@email.com' })

    await user.save()

    testUsers.push(user)

    expect(user).toBeDefined()
    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('email')
    expect(user).toHaveProperty('endpoints')
    expect(user).toHaveProperty('active')
    expect(user).toHaveProperty('contracts')
    expect(user).toHaveProperty('createdAt')
    expect(user).toHaveProperty('updatedAt')
  })

  it('should add contract by method addContract', async () => {
    const user = new Model({ email: 'teste2@email.com' })

    await user.save()

    const contractId = v4()

    user.addContract(contractId)

    testUsers.push(user)

    expect(user).toBeDefined()
    expect(user).toHaveProperty('contracts')
    expect(user.contracts).toHaveLength(1)
    expect(user.contracts[0]).toEqual(contractId)
  })

  it('should add contract by method validContractById', async () => {
    const user = new Model({ email: 'teste2@email.com' })

    await user.save()

    const contractId = v4()

    user.addContract(contractId)

    const isValidContract = user.validContractById(contractId)

    testUsers.push(user)

    expect(user).toBeDefined()
    expect(user).toHaveProperty('contracts')
    expect(user.contracts).toHaveLength(1)
    expect(user.contracts[0]).toEqual(contractId)
    expect(isValidContract).toEqual(true)
  })

  it('should add contract by method validContractById pass invalid ContractId', async () => {
    const user = new Model({ email: 'teste2@email.com' })

    await user.save()

    const contractId = v4()

    user.addContract(contractId)

    const isValidContract = user.validContractById(v4())

    testUsers.push(user)

    expect(user).toBeDefined()
    expect(user).toHaveProperty('contracts')
    expect(user.contracts).toHaveLength(1)
    expect(user.contracts[0]).toEqual(contractId)
    expect(isValidContract).toEqual(false)
  })
})

afterAll(async () => {
  await Promise.all(
    testUsers.map(item => {
      return Model.delete(item)
    })
  )
})
