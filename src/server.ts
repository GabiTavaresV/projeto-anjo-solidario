import express from "express";
import ongRouter from "./routes/index";

const app = express();
app.use(express.json());
app.use(ongRouter);



app.listen(3001, () => console.log("Server running!"));
