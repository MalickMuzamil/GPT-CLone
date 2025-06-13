import express from 'express';
import { connectDB } from "./Config/db.js";
const app = express();
const port = 3001;
import { google } from 'googleapis';
import bodyParser from 'body-parser';
import gptRouter from "./routes/route.js";
import signupRouter from "./routes/route.js";
import LoginRouter from './routes/route.js'

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

connectDB();

app.use(bodyParser.json());
app.use(express.json());

app.use("/", gptRouter);
app.use("/signup", signupRouter);
app.use("/login", LoginRouter);


app.listen(port, () => {
  console.log(`Hello World From Express Port No ${port}`);
});
