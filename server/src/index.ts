import express, { Request, Response } from "express";
import mongoose from "mongoose";

import Deck from "./models/Deck";

const PORT = 5000;

const app = express();

app.use(express.json());

app.post("/decks", async (req: Request, res: Response) => {
  console.log(req.body);
  const newDeck = new Deck({
    title: req.body.title,
  });
  const createDeck = await newDeck.save();
  res.json(createDeck);
});

mongoose
  .connect(
    "mongodb+srv://flashcard:J1QQc79fmbrTWPfC@mern-web-app.5rlrwwy.mongodb.net/?retryWrites=true&w=majority&appName=MERN-web-app"
  )
  .then(() => {
    console.log(`You had found ${PORT}`);
    app.listen(PORT);
  });
