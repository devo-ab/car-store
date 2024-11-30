import { Request, Response } from 'express';
import { CarServices } from './car.service';

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
    console.log(error);
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
    console.log(error);
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
    console.log(error);
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
    console.log(error);
  }
};

export const CarController = {
  createCar,
  getAllCars,
  getSingleCar,
  deleteCar,
};
