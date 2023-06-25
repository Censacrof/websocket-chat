import { vi } from "vitest";
import WebSocket from "ws";
import { startWsServer } from "./channel";

const waitFor = (
  callback: () => void | Promise<unknown>,
  options?: {
    timeout?: number;
    retryInterval?: number;
  }
) => {
  return new Promise((resolve, reject) => {
    let lastError: unknown;
    const retryMs = options?.retryInterval || 100;
    const timeout = setTimeout(() => {
      clearTimeout(retry);
      reject(lastError);
    }, options?.timeout || 5000);

    const retryFn = async () => {
      try {
        await callback();
        clearTimeout(timeout);
        resolve(undefined);
      } catch (e) {
        retry = setTimeout(retryFn, retryMs);
        lastError = e;
      }
    };

    let retry = setTimeout(retryFn, retryMs);
  });
};

describe("WS channel", () => {
  it("it listens for connections", async () => {
    await startWsServer();

    const handleOpen = vi.fn();

    expect(handleOpen).toHaveBeenCalledTimes(0);

    const ws = new WebSocket(`ws://localhost:${4000}/channel`);
    ws.addEventListener("open", handleOpen);

    await waitFor(() => {
      expect(handleOpen).toHaveBeenCalledTimes(1);
    });
  });
});
