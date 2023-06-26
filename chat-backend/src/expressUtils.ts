import express, { Express } from "express";
import { IncomingMessage, Server, ServerResponse } from "http";
import { AddressInfo } from "net";

export interface StartExpressOptions {
  port?: number;
}

export const startExpress = (options?: StartExpressOptions) => {
  const app = express();

  return new Promise<{
    app: Express;
    port: number;
    server: Server<typeof IncomingMessage, typeof ServerResponse>;
    baseURL: URL;
  }>((resolve, reject) => {
    const server = app
      .listen(options?.port || 0, () => {
        const port = (server.address() as AddressInfo).port;

        const baseURL = new URL(`http://localhost:${port}`);
        return resolve({ app, port, server, baseURL });
      })
      .on("error", (error) => {
        reject(error);
      });
  });
};

export const stopExpress = (
  server: Server<typeof IncomingMessage, typeof ServerResponse>
) => {
  return new Promise<void>((resolve) => {
    server.close(() => resolve());
  });
};
