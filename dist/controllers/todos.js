"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteToDo = exports.updateToDo = exports.getToDOs = exports.createToDo = void 0;
const todo_1 = __importDefault(require("../models/todo"));
const createToDo = async (req, res, next) => {
    try {
        const text = req.body.text;
        const newTodo = new todo_1.default({ text });
        const createdTodo = await newTodo.save();
        res.status(201).json({ message: 'Created the todo', createdTodo });
    }
    catch (error) {
        next(error);
    }
};
exports.createToDo = createToDo;
const getToDOs = async (req, res, next) => {
    try {
        const todos = await todo_1.default.find();
        res.json({ todos });
    }
    catch (error) {
        next(error);
    }
};
exports.getToDOs = getToDOs;
const updateToDo = async (req, res, next) => {
    try {
        const todoId = req.params.id;
        const updatedText = req.body.text;
        const updatedTodo = await todo_1.default.findByIdAndUpdate(todoId, { text: updatedText }, { new: true });
        if (!updatedTodo) {
            throw new Error('Could not find todo!');
        }
        res.json({ message: 'Updated!', updatedTodo });
    }
    catch (error) {
        next(error);
    }
};
exports.updateToDo = updateToDo;
const deleteToDo = async (req, res, next) => {
    try {
        const todoId = req.params.id;
        const deletedTodo = await todo_1.default.findByIdAndDelete(todoId);
        if (!deletedTodo) {
            throw new Error('Could not find todo!');
        }
        res.json({ message: 'Todo deleted!' });
    }
    catch (error) {
        next(error);
    }
};
exports.deleteToDo = deleteToDo;
