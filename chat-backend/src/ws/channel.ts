import { IncomingMessage } from "http";
import WebSocket, { WebSocketServer } from "ws";

const port = 4000;
const path = "/channel";

export const channelUrl = new URL(path, `ws://localhost:${port}`);

type Wss = WebSocket.Server<typeof WebSocket, typeof IncomingMessage>;

export const startChannel = () =>
  new Promise<Wss>((resolve, reject) => {
    const wss = new WebSocketServer({
      port: 4000,
      path: "/channel",
    });

    wss.on("listening", () => resolve(wss));
    wss.on("error", reject);

    wss.on("connection", (ws) => {
      ws.close();
    });
  });

export const stopChannel = (wss: Wss) =>
  new Promise<void>((resolve, reject) => {
    wss.on("error", reject);

    wss.close(() => {
      console.log("CLOSE");
      resolve();
    });
  });
