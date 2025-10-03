

import { Router } from "express";
import { deleteAboutMe, getAboutMe, upsertAboutMe,  } from "./about.controller";


export const Aboutrouter = Router();



Aboutrouter.get("/", getAboutMe);
Aboutrouter.patch("/", upsertAboutMe);




Aboutrouter.delete("/", deleteAboutMe);

