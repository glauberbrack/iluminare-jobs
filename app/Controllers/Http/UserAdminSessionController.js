'use strict'

const User = use('App/Models/User')
const Database = use('Database')

class UserAdminSessionController {
  async store ({ request, response, auth }) {
    try {
      const { email, password } = request.all()

      const user = await User.findByOrFail('email', email)

      if(user.status != 'active'){
        return response.status(401).send({ error: { message: 'Usuário não ativo no sistema.' } })
      }

      const isAdmin = await Database.table('role_user').where('user_id', user.id).first()

      if(isAdmin.role_id == 1){

        try {
          const token = await auth.attempt(email, password)
          return { token, user }

        } catch (error) {
          return response.status(401).send({ error: { message: 'Verifique suas credenciais' } })
        }
      }

      return response.status(401).send({ error: { message: 'Ops, seu lugar não é aqui!' } })

    } catch (error) {
      return response.status(401).send({ error: { message: 'Verifique suas credenciais' } })
    }
  }
}

module.exports = UserAdminSessionController
