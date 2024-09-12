import { dbContext } from "../db/DbContext.js"

class ImagesService {
  async getRandomImage() {
    const imagesCount = await dbContext.Images.countDocuments()
    const randomSkipAmount = Math.floor(Math.random() * imagesCount)
    const randomImage = await dbContext.Images.findOne().populate('author', 'name picture').skip(randomSkipAmount)
    return randomImage
  }

}

export const imagesService = new ImagesService()