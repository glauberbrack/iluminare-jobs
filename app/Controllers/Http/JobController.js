'use strict'

const Database = use('Database')

class JobController {
  async index (){
    const jobs = await Database.select('*').from('jobs')
    return jobs
  }
}

module.exports = JobController
