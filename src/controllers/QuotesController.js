import { Auth0Provider } from "@bcwdev/auth0provider";
import { quotesService } from "../services/QuotesService.js";
import BaseController from "../utils/BaseController.js";

export class QuotesController extends BaseController {
  constructor() {
    super('api/quotes')
    this.router
      .get('', this.getRandomQuote)
      // NOTE anything below (after) this use means you have to be logged in (have a valid bearer token)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createQuote)
  }

  async getRandomQuote(request, response, next) {
    try {
      const randomQuote = await quotesService.getRandomQuote()
      response.send(randomQuote)
    } catch (error) {
      next(error)
    }
  }

  async createQuote(request, response, next) {
    try {
      const quoteData = request.body
      // NOTE the user making the request
      const user = request.userInfo
      // NOTE this will overwrite the authorId if it is present in the body, or create the property if it is not present
      quoteData.authorId = user.id
      const quote = await quotesService.createQuote(quoteData)
      response.send(quote)
    } catch (error) {
      next(error)
    }
  }
}