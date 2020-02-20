const { Server } = require('http')
const { spy, assert } = require('sinon')
const response = { 
    setHeader: spy()
}

const eventName = 'request'
const expectedCallCount = 1
const expectedZeroCalls = 0
const request = null 


const serverInstance = new Server()
serverInstance.emit(eventName, request, response)
assert.callCount(response.setHeader, expectedZeroCalls)


// testing after binding the Agent
require('./agent').start()
serverInstance.emit(eventName, request, response)
assert.callCount(response.setHeader, expectedCallCount)
assert.calledWithExactly(response.setHeader, 'X-Instrumented-By', 'Sqreen')

