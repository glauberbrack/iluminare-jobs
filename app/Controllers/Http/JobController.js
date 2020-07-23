'use strict'

const Database = use('Database')

class JobController {
  async index ({request, response, params}){
    try{
      const { page } = request.all()

      const jobs = await Database.select('*').from('jobs').orderBy('id', 'desc').paginate(page, 7)
      return jobs

    } catch(err){
      return console.log(err)
    }
  }
}

module.exports = JobController
