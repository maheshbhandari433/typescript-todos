import { Schema, model } from 'mongoose';

// Define Todo interface
interface Todo {
  text: string;
}

// Define Mongoose schema for Todo
const todoSchema = new Schema<Todo>({
  text: { type: String, required: true }
});

// Export Todo model
export default model<Todo>('Todo', todoSchema);