import Cors from "cors";
import express from "express";

import { connectMongo } from "./db/server.conection";
import { routes } from "./routes";

const app = express();
app.use(Cors());
app.use(express.json());

connectMongo();

app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is running");
});
