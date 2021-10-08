import express from "express";
import dotenv from "dotenv";
import { mainRouter, movieRouter } from "./routers";
import cors from "cors";

export const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(mainRouter, movieRouter);
