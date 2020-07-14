'use strict'

const User = use('App/Models/User')
const Role = use('Adonis/Acl/Role')

class DatabaseSeeder {
  async run () {
    const userAdminGlauber = await User.create({
      username: 'Glauber',
      email: 'glauber@iluminare.dev',
      password: 'glauber',
      status: 'active'
    })

    const userAdminRicardo = await User.create({
      name: 'ricardo',
      email: 'ricardo@@iluminare.dev',
      password: 'ricardo',
      status: 'active'
    })
    const admin = await Role.create({
      slug: 'admin',
      name: 'Administrator'
    })

    const moderator = await Role.create({
      slug: 'moderator',
      name: 'Moderator'
    })

    const guest = await Role.create({
      slug: 'guest',
      name: 'guest'
    })

    await userAdminGlauber.roles().attach([admin.id])

    await userAdminRicardo.roles().attach([admin.id])

  }
}

module.exports = DatabaseSeeder
