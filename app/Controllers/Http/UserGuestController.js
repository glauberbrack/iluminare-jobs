'use strict'

const User = use('App/Models/User')
const Database = use('Database')

class UserGuestController {
  async index () {
    const users = await Database.raw(`
      Select u.id, u.name, u.cpfcnpj, u.position, u.email, u.city, u.state, u.zipcode, u.phone, u.birthdate, u.status
        from users u join role_user ru
        on u.id = ru.user_id
        where ru.role_id = '3'
    `);

    return users.rows
  }

  async store ({ request, response }) {
    try {
      const { permissions, ...data } = request.only([
        'username',
        'email',
        'password',
        'permissions'])

        const {email} = data

        const emailExists = await Database.from('users').where('email', email).count('id')

        if(emailExists[0].count == 1){
          return response.status(401).send({ error: { message: 'Email already exists.' } })
        }

        // Guest role
        const roles = 3

        const user = await User.create({
          ...data,
          status: 'active'
        })

        if (roles) {
          await user.roles().attach(3)
        }

        if (permissions) {
          await user.permissions().attach(permissions)
        }

        await user.loadMany(['roles', 'permissions'])

        return user

    } catch (error) {
      return response.status(error.status).send({ error: { message: 'Falha ao cadastrar, tente novamente mais tarde.' } })
    }

  }

  async show({params, response}){
    try {
      const user = await User.findByOrFail('id', params.id)

      if (!user) {
        return response.status(401).send({ error: { message: 'Usuário não encontrado.' } })
      }

      return user
    } catch (err) {
      return response.status(err.status).send({ error: { message: 'Houve uma falha! Contate o adminsitrador.' } })
    }

  }

  async update ({ request, params}) {
    try {
      const user = await User.findByOrFail('id', params.id)

      if (!user) {
        return response.status(401).send({ error: { message: 'Usuário não encontrado.' } })
      }

      const { ...data } = request.only([
        'username',
        'email',
        'password'])

      user.merge(data)

      await user.save()

      return user
    } catch (err) {
      return response.status(err.status).send({ error: { message: 'Houve uma falha! Contate o adminsitrador.' } })
    }
  }
}

module.exports = UserGuestController
