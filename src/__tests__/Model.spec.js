import Model from '../Model'

describe('Users', () => {

  it('should save user with email wrong', async () => {
    const user = new Model({ email: 'lfgoncalves@stefanini.com', name: 'Luiz Fernando', password: 'luiz' })
    try {
      await user.save()
      testUsers.push(user)
    } catch (err) {
      expect(err).toBeDefined()
    }
  })

})
  
