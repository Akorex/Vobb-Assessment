import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },

    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    model: {
      type: String,
      required: true,
    },

    colour: {
      type: String,
      required: false,
    },

    plateNumber: {
      type: String,
      required: true,
      unique: true,
    },

    availability: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Car = mongoose.model("Cars", carSchema);
export default Car;
