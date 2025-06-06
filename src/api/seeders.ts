import mongoose from "mongoose";
import Category from "./categories/categories.model";
import Car from "./cars/cars.model";
import { DATABASE_URL } from "../../env";

const seedDB = async () => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("✅ Connected to MongoDB");

    // 1. Insert categories
    const insertedCategories = await Category.insertMany([
      {
        title: "Travel",
        description:
          "Spacious vehicles suitable for families and off-road adventures.",
      },
      {
        title: "Commute",
        description:
          "Comfortable cars ideal for city driving and long-distance travel.",
      },
      {
        title: "Factory",
        description:
          "Stylish cars with retractable roofs, perfect for sunny weather cruising.",
      },
    ]);

    // 2. Use the returned categories with real _id values
    const cars = [
      {
        brand: "Toyota",
        category: insertedCategories[0]._id,
        price: 25000,
        model: "RAV4",
        colour: "White",
        plateNumber: "XYZ-4443", // ✅ must be unique
        availability: true,
      },
      {
        brand: "Honda",
        category: insertedCategories[1]._id,
        price: 22000,
        model: "Civic",
        colour: "Black",
        plateNumber: "XYZ-9876",
        availability: true,
      },
      {
        brand: "BMW",
        category: insertedCategories[2]._id,
        price: 45000,
        model: "Z4",
        colour: "Red",
        plateNumber: "DEF-1122",
        availability: true,
      },
    ];

    // 3. Insert cars
    await Car.insertMany(cars);

    console.log("✅ DB seeding completed!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

seedDB();
