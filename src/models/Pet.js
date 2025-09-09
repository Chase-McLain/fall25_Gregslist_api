import { Schema } from "mongoose";



export const PetSchema = new Schema({

  name: { type: String, required: true, minLength: 1, maxLength: 25 },
  age: { type: Number, required: true, min: 0, max: 99 },
  isVaccinated: { type: Boolean, required: true, default: false },
  species: { type: String, required: true, minLength: 1, maxLength: 25 },
  imgUrl: { type: String, required: true, minLength: 1, maxLength: 500 },
  status: { type: String, required: true, minLength: 1, maxLength: 25, default: "adoptable" },
  like: [{ type: String }],
  creatorId: { type: Schema.ObjectId, required: true }

},

  { timestamps: true, versionKey: false, toJSON: { virtuals: true } }

)



PetSchema.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
}

)

