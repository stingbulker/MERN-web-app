import { config } from "dotenv";
config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { getDecksController } from "./controller/getDeckController";
import { createDeckController } from "./controller/createDeckController";
import { deleteDeckController } from "./controller/deleteDeckController";
import { createCardForDeckController } from "./controller/createCardForDeckController";

const PORT = 5000;

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/decks", getDecksController);
app.post("/decks", createDeckController);
app.delete("/decks/:deckId", deleteDeckController);
app.post("/decks;deckId/cards", createCardForDeckController);

mongoose.connect(process.env.MONGO_URL ?? "").then(() => {
  console.log(`You had found ${PORT}`);
  app.listen(PORT);
});
