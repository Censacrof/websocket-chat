import { startExpress, stopExpress } from "./expressUtils";

let testServer = await startExpress();

beforeEach(async () => {
  await stopExpress(testServer.server);
  testServer = await startExpress();
});

afterAll(async () => {
  await stopExpress(testServer.server);
});

export const getTestServer = () => testServer;
