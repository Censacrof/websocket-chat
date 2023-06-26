import WebSocket from "ws";
import { getTestChannel } from "../setupTestChannel";
import { waitForWsEvent } from "../testUtils";

describe("WS channel", () => {
  it("listens for connections", async () => {
    const { channelUrl } = getTestChannel();

    const ws = new WebSocket(channelUrl);
    await waitForWsEvent(ws, "open");
  });
});
