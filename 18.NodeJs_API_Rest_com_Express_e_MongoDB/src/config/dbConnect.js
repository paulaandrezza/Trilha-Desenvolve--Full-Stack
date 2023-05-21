import mongoose from "mongoose";

mongoose.connect("mongodb+srv://paulaandrezza:Katniss0604@alura.8kt5hog.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;