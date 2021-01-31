const { describe, it, before, afterEach } = require('mocha')
const { expect } = require('chai')
const Todo = require('../src/todo')
const TodoService = require('../src/todoService')  
const { createSandbox } = require('sinon')

describe('todoService', () => {
  let todoService 
  let sandBox
  before(() => {
    sandBox = createSandbox()
  })
  describe('#list', () => {
    const mockDatabase = [
      {
        name: 'Xuxalina',
        age: 90,
        meta: { revision: 0, created: 1611807640917, version: 0 },
        '$loki': 1
      },
    ] 
    let todoService
    beforeEach(() => {
      sandBox = createSandbox()
      const dependecies = {
        todoRepository: {
          list: sandBox.sutb().returns(mockDatabase)
        }
      }
      todoService = new TodoService(dependecies)
    })

    it('should return data on a specific format', () => {
      const result = todoService.list();
      const [{meta, $loki, ...expected}] = mockDatabase
      expect(result).to.be.deep.equal([expected])
    })
  })
}) 
