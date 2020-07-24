'use strict'

const Database = use('Database')

class JobController {
  async index8 ({request}){
    try{
      const { page } = request.all()

      const jobs = await Database.select('*').from('jobs').orderBy('id', 'desc').paginate(page, 8)
      return jobs

    } catch(err){
      return console.log(err)
    }
  }

  async index4 ({request}){
    try{
      const { page } = request.all()

      const jobs = await Database.select('*').from('jobs').orderBy('id', 'desc').paginate(page, 4)
      return jobs

    } catch(err){
      return console.log(err)
    }
  }




}

module.exports = JobController
