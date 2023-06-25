import express, { Express } from "express";
import { IncomingMessage, Server, ServerResponse } from "http";

export const startExpress = () => {
  const app = express();

  return new Promise<{
    app: Express;
    port: number;
    server: Server<typeof IncomingMessage, typeof ServerResponse>;
    baseURL: URL;
  }>((resolve, reject) => {
    const port = 12312;

    const baseURL = new URL(`http://localhost:${port}`);

    let server: Server<typeof IncomingMessage, typeof ServerResponse>;

    // eslint-disable-next-line prefer-const
    server = app
      .listen(port, () => resolve({ app, port, server, baseURL }))
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
