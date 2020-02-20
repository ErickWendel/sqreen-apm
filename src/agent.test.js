require('./agent').start()
const { Server } = require('http')
const { spy, assert } = require('sinon')
const response = { 
    setHeader: spy()
}

const eventName = 'request'
const expectedCallCount = 1
const request = null 


const serverInstance = new Server()
serverInstance.emit(eventName, request, response)

assert.callCount(response.setHeader, expectedCallCount)
assert.calledWithExactly(response.setHeader, 'X-Instrumented-By', 'Sqreen')

