import { ChatRoom } from "../model/chatRoom";
import { getTestServer } from "../setupTestServer";
import {
  CreateChatRoomArgsType,
  GetChatRoomResult,
  GetChatRoomResultType,
  chatRoomRouterFactory,
} from "./chatRoomRouter";

const baseFetch = (
  input: URL | RequestInfo,
  init?: RequestInit | undefined
) => {
  return fetch(input, {
    ...init,
    headers: {
      "Content-type": "application/json",
      ...init?.headers,
    },
  });
};

describe("chatRoomRouter", async () => {
  it("returns the list of available chatRooms", async () => {
    const { app, baseURL } = getTestServer();

    const chatRooms: ChatRoom[] = [
      {
        name: "A chat room",
      },
      {
        name: "Another chat room",
      },
    ];

    app.use("/", chatRoomRouterFactory(chatRooms));

    const res = await baseFetch(baseURL);

    expect(res.status).toEqual(200);

    const data = GetChatRoomResult.check(await res.json());

    expect(data).toEqual({ chatRooms } satisfies GetChatRoomResultType);
  });

  it("creates a new chatroom", async () => {
    const { app, baseURL } = getTestServer();

    const chatRooms: ChatRoom[] = [];
    app.use("/", chatRoomRouterFactory(chatRooms));

    const res = await baseFetch(baseURL, {
      method: "POST",
      body: JSON.stringify({
        name: "a chat room",
      } satisfies CreateChatRoomArgsType),
    });

    expect(res.status).toEqual(200);

    const data = ChatRoom.check(await res.json());

    expect(data).toEqual({
      name: "a chat room",
    } satisfies ChatRoom);

    expect(chatRooms).toEqual([
      {
        name: "a chat room",
      },
    ]);
  });

  it("returns 400 when posting an invalid chatroom", async () => {
    const { app, baseURL } = getTestServer();

    const chatRooms: ChatRoom[] = [];
    app.use("/", chatRoomRouterFactory(chatRooms));

    const res = await baseFetch(baseURL, {
      method: "POST",
      body: JSON.stringify({
        "giaggi?": "giaggio!",
      }),
    });

    expect(res.status).toEqual(400);
  });
});
