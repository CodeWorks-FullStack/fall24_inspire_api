import { Schema } from "mongoose";

export const QuoteSchema = new Schema(
  {
    body: { type: String, required: true, minlength: 5, maxlength: 250 },
    authorId: { type: Schema.ObjectId, required: true, ref: 'Account' }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)

QuoteSchema.virtual('author', {
  localField: 'authorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})