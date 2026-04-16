import mongoose, { Document, Model, Schema } from "mongoose";

export interface ITodo extends Document {
  title: string;
  completed: boolean;
}

const todoSchema: Schema<ITodo> = new mongoose.Schema(
{
  title: {
    type: String,
    required: true,
    trim: true
  },

  completed: {
    type: Boolean,
    default: false
  }

},
{
  timestamps: true
});

const Todo: Model<ITodo> = mongoose.model<ITodo>("Todo", todoSchema);

export default Todo;