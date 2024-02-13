"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = __importDefault(require("./routes/todo"));
const body_parser_1 = require("body-parser");
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
// Connect to MongoDB database
mongoose_1.default.connect('mongodb+srv://mahesh:mongoPass1@clusterevent.wnhdxou.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
    console.log('Connected to MongoDB Atlas');
})
    .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
});
// Handle connection events
mongoose_1.default.connection.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});
mongoose_1.default.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});
app.use((0, body_parser_1.json)()); // This is the middleware for parsing the body of the request
const port = 3005;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.use('/todos', todo_1.default); // This is the route for the todoRoutes
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
}); // This is the error handling middleware
