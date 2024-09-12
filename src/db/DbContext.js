import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { QuoteSchema } from '../models/Quote.js';
import { ImageSchema } from '../models/Image.js';
import { TodoSchema } from '../models/Todo.js';

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Quotes = mongoose.model('Quote', QuoteSchema);
  Images = mongoose.model('Image', ImageSchema)
  Todos = mongoose.model('Todo', TodoSchema)
}

export const dbContext = new DbContext()
