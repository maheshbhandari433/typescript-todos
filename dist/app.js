"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = __importDefault(require("./routes/todo"));
const body_parser_1 = require("body-parser");
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)()); // this is the middleware for parsing the body of the request
app.listen(3005); // 3005 is the port number
app.use('/todos', todo_1.default); // this is the route for the todoRoutes
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
}); // this is the error handling middleware
