import { startExpress, stopExpress } from "./expressUtils";

let testServer = await startExpress();

beforeEach(async () => {
  await stopExpress(testServer.server);
  testServer = await startExpress();
});

export const getTestServer = () => testServer;
