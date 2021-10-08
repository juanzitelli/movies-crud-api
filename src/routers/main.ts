import { Router } from "express";
import { MainRoutes } from "./../types/routes";
import { getRoot } from "./../controllers/main";

export const mainRouter: Router = Router();

mainRouter.get(MainRoutes.Main, getRoot);
