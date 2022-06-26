import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const conect = `${process.env.MONGO_CONNECTION}`;

const connectMongo = () => {
  mongoose
    .connect(conect)
    .then(() => {
      console.log("Succes, has ben connected into mongo");
    })
    .catch((err) => {
      //   console.log(err);
    });
};

export { connectMongo };
