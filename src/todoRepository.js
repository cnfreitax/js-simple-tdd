const loki = require('lokijs')

class TodoRepository {
  constructor() {
    const db = new loki('todo', { })
    this.schedule = db.addCollection("schedule")
  }

  list() {
    return this.schedule.find()
  }


  create(data) {
    return this.schedule.insertOne(data)
  }
}

module.exports = TodoRepository

// const c = new TodoRepository()
// c.create({name: 'Xuxalina', age: 90})
// c.create({name: 'Jhones', age: 21})

// console.log('list', c.list())