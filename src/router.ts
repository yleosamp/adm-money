import { Router } from "express";
import { addEntry, listEntries } from "./controller/controller";

const router = Router()

export default router
  .post("/gain", addEntry)
  .post("/spent", addEntry)
  .post("/list", listEntries)