// install dependencies
const { Schema, model } = require("mongoose");

// Schema
const PizzaSchema = new Schema({
  // name of pizza
  pizzaName: {
    type: String,
  },
  // name of user who created the pizza
  createdBy: {
    type: String,
  },
  // timestamp when pizza was created (and updated)
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // pizza's size
  size: {
    type: String,
    default: "Large",
  },
  // pizza's toppings (can also specify "array" instead of brackets)
  toppings: [],
});

// create the Pizza model using the PizzaSchema
const Pizza = model("Pizza", PizzaSchema);

// export the Pizza model
module.exports = Pizza;
