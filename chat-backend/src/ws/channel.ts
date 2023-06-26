import { IncomingMessage } from "http";
import WebSocket, { WebSocketServer } from "ws";

const port = 4000;
const path = "/channel";

export const channelUrl = new URL(path, `ws://localhost:${port}`);

export const startWsServer = () =>
  new Promise<WebSocket.Server<typeof WebSocket, typeof IncomingMessage>>(
    (resolve, reject) => {
      const wss = new WebSocketServer({
        port: 4000,
        path: "/channel",
      });

      wss.on("listening", () => resolve(wss));
      wss.on("error", reject);
    }
  );
