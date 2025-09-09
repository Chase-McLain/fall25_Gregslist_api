import { Schema } from "mongoose";



export const PetSchema = new Schema({
  name: { type: String, required: true, minLength: 1, maxLength: 25 },
  age: { type: Number, required: true, min: 0, max: 99 },
  isVaccinated: { type: Boolean, required, default: false },
  species: { type: String, required: true, minLength: 1, maxLength: 25 },
  imgUrl: { type: String, required: true, minLength: 1, maxLength: 500 },
  status: { type: String, required: true, minLength: 1, maxLength: 25, default: "adoptable" },
  like: [{ type: String }],





})





