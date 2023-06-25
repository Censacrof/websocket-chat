import express, { Express } from "express";
import { ChatRoomType } from "../model/chatRoom";
import {
  GetChatRoomResult,
  GetChatRoomResultType,
  chatRoomRouterFactory,
} from "./chatRoomRouter";

const startExpress = () => {
  const app = express();

  return new Promise<{ app: Express; port: number }>((resolve, reject) => {
    const port = 12312;
    app
      .listen(port, () => resolve({ app, port }))
      .on("error", (error) => {
        reject(error);
      });
  });
};

const { app, port } = await startExpress();
const baseURL = new URL(`http://localhost:${port}`);

describe("chatRoomRouter", async () => {
  it("returns the list of available chatRooms", async () => {
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
