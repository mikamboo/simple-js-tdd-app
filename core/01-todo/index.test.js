const Todos = require('./index');
const assert = require('assert').strict;

describe("integration test", function() {
  it("should be able to add and complete TODOs", function() {
      let todos = new Todos();
      assert.strictEqual(todos.list().length, 0);
      todos.add('bonjour')
      assert.strictEqual(todos.list().length, 1);
      
      const todo = todos.list()[0]
      assert.strictEqual(todo.title, 'bonjour');
      assert.strictEqual(todo.completed, false);
      todos.complete('bonjour')
      assert.strictEqual(todo.completed, true);

      const nonExistingTodo = 'not-existing todo'
      try {
        todos.complete(nonExistingTodo)
      } catch (error) {
        const msg = `No TODO was found with the title: "${nonExistingTodo}"`
        assert.strictEqual(error.message, msg);
      }
  });
});