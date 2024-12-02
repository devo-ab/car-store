import { Schema, model } from 'mongoose';
import { Car, Order } from './car.interface';

// 2. Create a Schema corresponding to the document interface.
const carSchema = new Schema<Car>(
  {
    brand: { type: String },
    model: { type: String },
    year: { type: Number },
    price: {
      type: Number,
      required: [true, 'Price must be a positive number'],
      min: [0, 'Price must be a positive number'],
    },
    category: {
      type: String,
      enum: {
        values: ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'],
        message: '{VALUE} is not a valid category',
      },
      required: [true, 'Category is required'],
    },
    description: { type: String, default: '' },
    quantity: {
      type: Number,
      required: [true, 'Quantity must be a positive number'],
      min: [0, 'Quantity cannot be negative'],
    },
    inStock: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  },
);

const orderSchema = new Schema<Order>(
  {
    email: { type: String },
    car: { type: String },
    quantity: {
      type: Number,
      required: [true, 'Quantity must be a positive number'],
      min: [0, 'Quantity cannot be negative'],
    },
    totalPrice: { type: Number },
  },
  {
    timestamps: true,
  },
);
// 2. Create a Schema corresponding to the document interface.

// 3. Create a Model.
export const CarModel = model<Car>('Car', carSchema);
export const OrderModel = model<Order>('Order', orderSchema);
// 3. Create a Model.
