import { RequestHandler } from 'express';
import TodoModel from '../models/todo';

export const createToDo: RequestHandler = async (req, res, next) => {
    try {
        const text = (req.body as { text: string }).text;
        const newTodo = new TodoModel({ text });
        const createdTodo = await newTodo.save();
        res.status(201).json({ message: 'Created the todo', createdTodo });
    } catch (error) {
        next(error);
    }
};

export const getToDOs: RequestHandler = async (req, res, next) => {
    try {
        const todos = await TodoModel.find();
        res.json({ todos });
    } catch (error) {
        next(error);
    }
}

export const updateToDo: RequestHandler<{ id: string }> = async (req, res, next) => {
    try {
        const todoId = req.params.id;
        const updatedText = (req.body as { text: string }).text;
        const updatedTodo = await TodoModel.findByIdAndUpdate(todoId, { text: updatedText }, { new: true });
        if (!updatedTodo) {
            throw new Error('Could not find todo!');
        }
        res.json({ message: 'Updated!', updatedTodo });
    } catch (error) {
        next(error);
    }
}

export const deleteToDo: RequestHandler = async (req, res, next) => {
    try {
        const todoId = req.params.id;
        const deletedTodo = await TodoModel.findByIdAndDelete(todoId);
        if (!deletedTodo) {
            throw new Error('Could not find todo!');
        }
        res.json({ message: 'Todo deleted!' });
    } catch (error) {
        next(error);
    }
}
