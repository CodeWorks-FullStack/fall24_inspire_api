import { Auth0Provider } from "@bcwdev/auth0provider";
import { todosService } from "../services/TodosService.js";
import BaseController from "../utils/BaseController.js";

export class TodosController extends BaseController {
  constructor() {
    super('api/todos')
    this.router
      // NOTE all paths in this controller require authorization
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createTodo)
      .get('', this.getMyTodos)
  }

  async createTodo(request, response, next) {
    try {
      const todoData = request.body
      const user = request.userInfo
      todoData.creatorId = user.id
      const todo = await todosService.createTodo(todoData)
      response.send(todo)
    } catch (error) {
      next(error)
    }
  }

  async getMyTodos(request, response, next) {
    try {
      const user = request.userInfo
      const todos = await todosService.getMyTodos(user.id)
      response.send(todos)
    } catch (error) {
      next(error)
    }
  }
}