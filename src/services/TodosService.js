import { dbContext } from "../db/DbContext.js"

class TodosService {
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