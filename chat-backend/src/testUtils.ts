import WebSocket from "ws";

export const waitFor = (
  callback: () => void | Promise<void>,
  options?: {
    timeout?: number;
    retryInterval?: number;
  }
) => {
  return new Promise((resolve, reject) => {
    let lastError: unknown = undefined;
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

export const waitForWsEvent = (
  ws: WebSocket,
  event:
    | "close"
    | "open"
    | "error"
    | "message"
    | "ping"
    | "pong"
    | "upgrade"
    | "unexpected-response"
) => {
  return new Promise<[...unknown[]]>((resolve) => {
    ws.on(event, (_, ...args: unknown[]) => {
      resolve(args);
    });
  });
};
