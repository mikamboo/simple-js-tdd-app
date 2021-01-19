'use strict'

const fastify = require('fastify')

function build(opts={}) {
  const app = fastify(opts)
  app.get('/', async function (request, reply) {
    return { hello: 'world' }
  })

  app.get('/health', async function (request, reply) {
    return { status: 'ok' }
  })

  app.get('/api/todos', async function (request, reply) {
    return [{ hello: 'world' , completed: true}]
  })

  return app
}

module.exports = build