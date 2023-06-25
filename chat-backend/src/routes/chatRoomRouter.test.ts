import { ChatRoomType } from "../model/chatRoom";
import { getTestServer } from "../setupTestServer";
import {
  GetChatRoomResult,
  GetChatRoomResultType,
  chatRoomRouterFactory,
} from "./chatRoomRouter";

describe("chatRoomRouter", async () => {
  it("returns the list of available chatRooms", async () => {
    const { app, baseURL } = getTestServer();

    const chatRooms: ChatRoomType[] = [
      {
        name: "A chat room",
      },
      {
        name: "Another chat room",
      },
    ];

    app.use("/", chatRoomRouterFactory(chatRooms));

    const res = await fetch(baseURL);
    const data = GetChatRoomResult.check(await res.json());

    expect(data).toEqual({ chatRooms } satisfies GetChatRoomResultType);
  });
});
