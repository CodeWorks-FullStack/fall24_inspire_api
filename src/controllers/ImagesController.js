import { imagesService } from "../services/ImagesService.js";
import BaseController from "../utils/BaseController.js";

export class ImagesController extends BaseController {
  constructor() {
    super('api/images')
    this.router
      .get('', this.getRandomImage)
  }

  async getRandomImage(request, response, next) {
    try {
      const randomImage = await imagesService.getRandomImage()
      response.send(randomImage)
    } catch (error) {
      next(error)
    }
  }
}