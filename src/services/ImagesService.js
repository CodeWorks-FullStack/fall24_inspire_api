import { dbContext } from "../db/DbContext.js"

class ImagesService {
  async getRandomImage() {
    const randomImage = await dbContext.Images.findOne()
    return randomImage
  }

}

export const imagesService = new ImagesService()