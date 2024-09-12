import { quotesService } from "../services/QuotesService.js";
import BaseController from "../utils/BaseController.js";

export class QuotesController extends BaseController {
  constructor() {
    super('api/quotes')
    this.router
      .get('', this.getRandomQuote)
  }

  async getRandomQuote(request, response, next) {
    try {
      const randomQuote = await quotesService.getRandomQuote()
      response.send(randomQuote)
    } catch (error) {
      next(error)
    }
  }
}