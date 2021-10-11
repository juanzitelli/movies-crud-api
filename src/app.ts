import express from "express";
import dotenv from "dotenv";
import { mainRouter, movieRouter } from "./routers";
import cors from "cors";

export const app = express();
dotenv.config();

// bodyParser constructor was deprecated, so I rather use this than:
//app.use(bodyParser.urlencoded());
//app.use(bodyParser.json());
app.use(express.json());

app.use(cors());
app.use(mainRouter, movieRouter);
