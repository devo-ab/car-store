import { Car, Order } from './car.interface';
import { CarModel, OrderModel } from './car.model';

const createCarIntoDB = async (car: Car) => {
  const result = await CarModel.create(car);
  return result;
};

const getAllCarsFromDB = async () => {
  const result = await CarModel.find();
  return result;
};

const getSingleCarFromDB = async (id: string) => {
  const result = await CarModel.findOne({ _id: id });
  return result;
};

const updateSingleCarData = async (id: string, updateData: Partial<Car>) => {
  const result = await CarModel.findByIdAndUpdate(id, updateData, {
    new: true,
  });
  return result;
};

const deleteCarFromDB = async (id: string) => {
  const result = await CarModel.deleteOne({ _id: id });
  return result;
};

const orderCar = async (orderData: Order) => {
  const { car, quantity, totalPrice, email } = orderData;
  const carData = await CarModel.findById(car);
  if (!carData) {
    throw new Error('Car not found');
  }

  if (carData.quantity < quantity) {
    throw new Error('Insufficient stock');
  }

  carData.quantity -= quantity;
  if (carData.quantity === 0) {
    carData.inStock = false;
  }
  await carData.save();

  const newOrder = await OrderModel.create({
    email,
    car,
    quantity,
    totalPrice,
  });

  return newOrder;
};


export const CarServices = {
  createCarIntoDB,
  getAllCarsFromDB,
  getSingleCarFromDB,
  deleteCarFromDB,
  updateSingleCarData,
};

export const OrderServices = {
  orderCar,
};
