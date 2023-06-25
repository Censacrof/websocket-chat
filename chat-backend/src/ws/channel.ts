import { IncomingMessage } from "http";
import WebSocket, { WebSocketServer } from "ws";

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
