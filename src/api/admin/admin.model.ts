import mongoose from "mongoose";
import { IAdmin } from "./admin.interface";

const AdminSchema = new mongoose.Schema(
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

const Admin = mongoose.model<IAdmin>("Admin", AdminSchema);

export default Admin;
