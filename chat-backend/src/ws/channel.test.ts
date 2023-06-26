import { vi } from "vitest";
import WebSocket from "ws";
import { waitFor } from "../testUtils";
import { channelUrl, startWsServer } from "./channel";

describe("WS channel", () => {
  it("it listens for connections", async () => {
    await startWsServer();

    const handleOpen = vi.fn();

    expect(handleOpen).toHaveBeenCalledTimes(0);

    const ws = new WebSocket(channelUrl);
    ws.addEventListener("open", handleOpen);

    await waitFor(() => {
      expect(handleOpen).toHaveBeenCalledTimes(1);
    });
  });
});
