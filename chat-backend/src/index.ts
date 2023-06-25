import { startExpress } from "./expressUtils";

const port = 3000;
const { app } = await startExpress({
  port,
});

app.get("/", (_req, _res) => {
  _res.send("Hello world");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
