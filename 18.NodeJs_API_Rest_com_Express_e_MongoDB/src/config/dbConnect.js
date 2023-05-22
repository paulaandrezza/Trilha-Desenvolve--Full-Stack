import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.DB_PASSWORD)

mongoose.connect(`mongodb+srv://paulaandrezza:${process.env.DB_PASSWORD}@alura.8kt5hog.mongodb.net/alura-node`);

let db = mongoose.connection;

export default db;