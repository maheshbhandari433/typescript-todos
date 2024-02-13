"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteToDo = exports.updateToDo = exports.getToDOs = exports.createToDo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createToDo = (req, res, next) => {
    const text = req.body.text; // this is type casting
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'Created the todo', createdTodo: newTodo });
};
exports.createToDo = createToDo;
const getToDOs = (req, res, next) => {
    res.json({ todos: TODOS });
};
exports.getToDOs = getToDOs;
const updateToDo = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error('Could not find todo!');
    }
    TODOS[todoIndex] = new todo_1.Todo(TODOS[todoIndex].id, updatedText);
    res.json({ message: 'Updated!', updatedTodo: TODOS[todoIndex] });
};
exports.updateToDo = updateToDo;
const deleteToDo = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error('Could not find todo!');
    }
    TODOS.splice(todoIndex, 1);
    res.json({ message: 'Todo deleted!' });
};
exports.deleteToDo = deleteToDo;
