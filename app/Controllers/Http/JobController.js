'use strict'

const Database = use('Database')

class JobController {
  async index ({request, response}){
    try{
      const page = parseInt(request.query.page)

      const jobs = await Database.select('*').from('jobs').orderBy('id', 'desc').paginate(page)
      return jobs

    } catch(err){
      return console.log(err)
    }
  }
}

module.exports = JobController
