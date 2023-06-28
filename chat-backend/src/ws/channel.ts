import { IncomingMessage } from "http";
import { AddressInfo } from "net";
import WebSocket, { WebSocketServer } from "ws";

export type Wss = WebSocket.Server<typeof WebSocket, typeof IncomingMessage>;

export const startChannel = (options?: { port?: number; path?: string }) =>
  new Promise<{ wss: Wss; channelUrl: URL }>((resolve, reject) => {
    const wss = new WebSocketServer({
      port: options?.port || 0,
      path: options?.path,
    });

    const port = (wss.address() as AddressInfo).port;
    const path = wss.path;

    const channelUrl = new URL(path, `ws://localhost:${port}`);

    wss.on("listening", () => resolve({ wss, channelUrl }));
    wss.on("error", reject);
  });

export const stopChannel = (wss: Wss) =>
  new Promise<void>((resolve) => {
    wss.close(() => {
      resolve();
    });

    wss.clients.forEach((ws) => ws.close());
  });
