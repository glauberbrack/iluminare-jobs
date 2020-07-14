'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JobSchema extends Schema {
  up () {
    this.create('jobs', (table) => {
      table.increments()
      table.string('customername')
      table.string('jobtitle')
      table.string('jobdescription')
      table.string('joblink')
      table.string('verifiedpayment')
      table.string('jobprice')
      table.string('country')
      table.string('workanadate')
      table.timestamps()
    })
  }

  down () {
    this.drop('jobs')
  }
}

module.exports = JobSchema
