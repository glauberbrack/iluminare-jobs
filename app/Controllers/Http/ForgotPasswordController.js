'use strict'
const moment = require('moment')

const crypto = require('crypto')
const User = use('App/Models/User')
const Database = use('Database')
const Mail = use('Mail')


class ForgotPasswordController {
  async store({request, response}){
    try {
      const email = request.input('email')

      const user = await User.findByOrFail('email', email)

      const newPassword = Math.random().toString(20).substring(7)

      user.password = newPassword

      await user.save()

      return (newPassword)

      // await Mail.send(
      //   ['emails.forgot_password'],
      //   {token: user.token },
      //   message => {
      //     message
      //       .to(user.email)
      //       .from('no-reply@iluminare.dev')
      //       .subject('Recuperação de senha')
      //   }
      // )
    } catch (err) {
      console.log(err)
      return response.status(err.status).send({ error: { message: 'Email not found.' } })
    }

  }

  async verifyToken ({ request, response }) {
    try {
      const token = request.input('token')

      const user = await Database.from('users').where('token', token).count('id')

        if(user[0].count != 1){
          return response.status(401).send({ error: { message: 'Invalid token.' } })
        }

      const tokenExpired = moment()
        .subtract('2', 'days')
        .isAfter(user.token_created_at)

      if (tokenExpired) {
        return response
          .status(401)
          .send({ error: { message: 'Your token has expired' } })
      }

    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Email not found.' } })
    }
  }

  async update ({ request, response, params }) {
    try {
      const password = request.input('password')

      const user = await User.findByOrFail('token', params.token)

      user.token = null;
      user.token_created_at = null;
      user.password = password;

      await user.save()

    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Email not found.' } })
    }
  }


}

module.exports = ForgotPasswordController
