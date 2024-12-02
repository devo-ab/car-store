import { Request, Response } from 'express';
import { CarServices, OrderServices } from './car.service';

const createCar = async (req: Request, res: Response) => {
  try {
    const car = req.body;
    const result = await CarServices.createCarIntoDB(car);
    res.status(200).json({
      message: 'Car created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to created car',
      status: false,
      error: error,
    });
  }
};

const getAllCars = async (req: Request, res: Response) => {
  try {
    const result = await CarServices.getAllCarsFromDB();
    res.status(200).json({
      message: 'Cars retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieved car details',
      status: false,
      error: error,
    });
  }
};

const getSingleCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const result = await CarServices.getSingleCarFromDB(carId);
    res.status(200).json({
      message: 'Cars retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieved car details',
      status: false,
      error: error,
    });
  }
};

const updateCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const updatedData = req.body;
    const result = await CarServices.updateSingleCarData(carId, updatedData);

    res.status(200).json({
      message: 'Car updated successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to update car details',
      status: false,
      error: error,
    });
  }
};

const deleteCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.cardId;
    const result = await CarServices.deleteCarFromDB(carId);
    res.status(200).json({
      message: 'Car deleted successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to deleted car',
      status: false,
      error: error,
    });
  }
};

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await OrderServices.orderCar(orderData);
    res.status(201).json({
      message: 'Order created successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to create car order',
      status: false,
      error: error,
    });
  }
};


export const CarController = {
  createCar,
  getAllCars,
  getSingleCar,
  deleteCar,
  updateCar,
};

export const OrderController = { createOrder };
