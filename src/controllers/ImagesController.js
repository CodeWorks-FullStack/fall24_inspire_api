import { Auth0Provider } from "@bcwdev/auth0provider";
import { imagesService } from "../services/ImagesService.js";
import BaseController from "../utils/BaseController.js";

export class ImagesController extends BaseController {
  constructor() {
    super('api/images')
    this.router
      .get('', this.getRandomImage)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createImage)
  }

  async getRandomImage(request, response, next) {
    try {
      const randomImage = await imagesService.getRandomImage()
      response.send(randomImage)
    } catch (error) {
      next(error)
    }
  }

  async createImage(request, response, next) {
    try {
      const imageData = request.body
      const user = request.userInfo
      // REVIEW never trust the client, always assign ownership with userInfo from bearer token
      imageData.authorId = user.id
      const image = await imagesService.createImage(imageData)
      response.send(image)
    } catch (error) {
      next(error)
    }
  }
}