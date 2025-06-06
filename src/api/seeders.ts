import mongoose from "mongoose";
import Category from "./categories/categories.model";

const seedDB = async () => {
  try {
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
    console.log("Product seeding completed!");
    process.exit(0);
  } catch (error) {
    console.log(error);
  }
};
