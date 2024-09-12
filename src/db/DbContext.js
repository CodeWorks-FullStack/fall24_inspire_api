import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { QuoteSchema } from '../models/Quote.js';
import { ImageSchema } from '../models/Image.js';

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Quotes = mongoose.model('Quote', QuoteSchema);
  Images = mongoose.model('Image', ImageSchema)

}

export const dbContext = new DbContext()
