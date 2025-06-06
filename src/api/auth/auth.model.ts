import mongoose from "mongoose";
import { IUser } from "./auth.interface";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
    },

    lastName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
    },

    password: {
      type: String,
      required: true,
      minlength: [6, "Your password should be exceed 6 characters."],
    },

    email: {
      type: String,
      required: [true, "Email address must be provided."],
      unique: true,
    },
    phone: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("Auth", userSchema);

export default User;
