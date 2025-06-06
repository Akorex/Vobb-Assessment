import mongoose from "mongoose";

export interface createCarDTO {
  brand: string;
  model: string;
  price: number;
  colour: string | null;
  plateNumber: string;
  category: string | mongoose.Types.ObjectId;
}
