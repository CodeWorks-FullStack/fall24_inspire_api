import { Schema } from "mongoose";

export const TodoSchema = new Schema(
  {
    description: { type: String, required: true, minlength: 1, maxlength: 500 },
    completed: { type: Boolean, required: true, default: false },
    creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true } // add the id property to all documents
  }
)