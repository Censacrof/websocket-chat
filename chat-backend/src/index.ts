import express from "express";

const app: express.Application = express();

const port = 3000;

app.get("/", (_req, _res) => {
  _res.send("Hello world");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
