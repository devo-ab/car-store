import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { CarRoutes } from './app/modules/car/car.route';
const app: Application = express();
// const port = 3000;

// parsers
app.use(express.json());
app.use(cors());
// parsers

// application routes
app.use('/api', CarRoutes);
// application routes

const getAController = (req: Request, res: Response) => {
  res.send('Car Store Running successfully');
};
app.get('/', getAController);

export default app;
