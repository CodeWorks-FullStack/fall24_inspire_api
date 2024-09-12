import { dbContext } from "../db/DbContext.js"
import { Forbidden } from "../utils/Errors.js"

class TodosService {
  async updateTodo(todoId, todoData) {
    const todoToUpdate = await dbContext.Todos.findById(todoId)

    // todoToUpdate.completed = todoData.completed == undefined ? todoToUpdate.completed : todoData.completed
    // todoToUpdate.description = todoData.description == undefined ? todoToUpdate.description : todoData.description
    // ?? is nullish coalescing operator. Checks if the left-hand side is null or undefined, and defaults to the right if that is true
    todoToUpdate.completed = todoData.completed ?? todoToUpdate.completed
    todoToUpdate.description = todoData.description ?? todoToUpdate.description

    // NOTE updates the database with the changes made to the document
    await todoToUpdate.save()

    return todoToUpdate
  }
  async getTodoById(todoId, userId) {
    const todo = await dbContext.Todos.findById(todoId)
    if (todo.creatorId != userId) {
      throw new Forbidden("You cannot access another user's todo")
    }
    return todo
  }
  async createTodo(todoData) {
    const todo = await dbContext.Todos.create(todoData)
    return todo
  }
  async getMyTodos(userId) {
    //             example of filter object: {creatorId: '65f87bc1e02f1ee243874743'}
    const todos = await dbContext.Todos.find({ creatorId: userId })
    return todos
  }
}

export const todosService = new TodosService()