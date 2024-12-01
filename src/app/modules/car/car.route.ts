import express from 'express';
import { CarController, OrderController } from './car.controller';

const router = express.Router();

router.post('/cars', CarController.createCar);

router.get('/cars', CarController.getAllCars);

router.get('/cars/:carId', CarController.getSingleCar);

router.put('/cars/:carId', CarController.updateCar);

router.delete('/cars/:carId', CarController.deleteCar);

router.post('/orders', OrderController.createOrder);


export const CarRoutes = router;
