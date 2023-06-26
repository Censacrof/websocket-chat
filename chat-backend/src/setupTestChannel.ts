import { startChannel, stopChannel } from "./ws/channel";

const startChannelOptions = {
  port: 0,
};

let testChannel = await startChannel(startChannelOptions);

beforeEach(async () => {
  await stopChannel(testChannel.wss);
  testChannel = await startChannel(startChannelOptions);
});

afterAll(async () => {
  await stopChannel(testChannel.wss);
});

export const getTestChannel = () => testChannel;
