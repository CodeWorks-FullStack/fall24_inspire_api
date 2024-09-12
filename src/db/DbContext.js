import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { QuoteSchema } from '../models/Quote.js';

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Quotes = mongoose.model('Quote', QuoteSchema);

}

export const dbContext = new DbContext()
