import mongoose from "mongoose";

const DogSchema= new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});
const Dog = mongoose.model('Dog', DogSchema);

export default Dog;