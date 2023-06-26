import { startChannel, stopChannel } from "./ws/channel";

let testChannel = await startChannel();

beforeEach(async () => {
  await stopChannel(testChannel);
  testChannel = await startChannel();
});

afterAll(async () => {
  await stopChannel(testChannel);
});

export const getTestChannel = () => testChannel;
