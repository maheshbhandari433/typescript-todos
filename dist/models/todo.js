"use strict";
/* export class Todo {
    constructor (public id: string, public text: string) {}
}
 */
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Define Mongoose schema for Todo
const todoSchema = new mongoose_1.Schema({
    text: { type: String, required: true }
});
// Export Todo model
exports.default = (0, mongoose_1.model)('Todo', todoSchema);
