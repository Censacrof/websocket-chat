import { startExpress } from "./expressUtils";

const port = 3000;
const { app, baseURL } = await startExpress({
  port,
});

app.get("/", (_req, _res) => {
  _res.send("Hello world");
});

app.listen(port, () => {
  console.log(`listening on ${baseURL}`);
});
