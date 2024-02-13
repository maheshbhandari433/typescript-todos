import express, { Request, Response, NextFunction} from 'express';
import todoRoutes from './routes/todo';
import { json } from 'body-parser';


const app = express ();
app.use(json());  // this is the middleware for parsing the body of the request

app.listen(3005);  // 3005 is the port number

app.use('/todos', todoRoutes);  // this is the route for the todoRoutes

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });
});  // this is the error handling middleware



