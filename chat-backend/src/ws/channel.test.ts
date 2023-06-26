import { vi } from "vitest";
import WebSocket from "ws";
import { getTestChannel } from "../setupTestChannel";
import { waitFor } from "../testUtils";
import { channelUrl } from "./channel";

describe("WS channel", () => {
  it("listens for connections", async () => {
    getTestChannel();

    const handleOpen = vi.fn();

    expect(handleOpen).toHaveBeenCalledTimes(0);

    const ws = new WebSocket(channelUrl);
    ws.addEventListener("open", handleOpen);

    await waitFor(() => {
      expect(handleOpen).toHaveBeenCalledTimes(1);
    });
  });
});
