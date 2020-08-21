const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const holderSchema = new Schema({
  name: { type: String, required: true },
  photo: { type: String, required: true },
  name: { type: String, required: true },
  deposit: { type: String, required: true }, 
  withdraw: { type: String, required: true }
});

const Holder = mongoose.model("Request", holderSchema);

module.exports = Holder;
