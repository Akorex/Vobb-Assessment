import mongoose from "mongoose";
import Category from "./categories/categories.model";
import { DATABASE_URL } from "../../env";

const seedDB = async () => {
  try {
    await mongoose.connect(DATABASE_URL);
    const carCategorySeed = [
      {
        title: "SUV",
        description:
          "Spacious vehicles suitable for families and off-road adventures.",
      },
      {
        title: "Sedan",
        description:
          "Comfortable cars ideal for city driving and long-distance travel.",
      },
      {
        title: "Convertible",
        description:
          "Stylish cars with retractable roofs, perfect for sunny weather cruising.",
      },
    ];

    await Category.insertMany(carCategorySeed);
    console.log("DB seeding completed!");
    process.exit(0);
  } catch (error) {
    console.log(error);
  }
};

seedDB();
