import { vi } from "vitest";
import WebSocket from "ws";
import { getTestChannel } from "../setupTestChannel";
import { waitFor } from "../testUtils";

describe("WS channel", () => {
  it("listens for connections", async () => {
    const { channelUrl } = getTestChannel();

    const handleOpen = vi.fn();

    const ws = new WebSocket(channelUrl);
    ws.addEventListener("open", handleOpen);

    await waitFor(() => {
      expect(handleOpen).toHaveBeenCalledTimes(1);
    });
  });
});
