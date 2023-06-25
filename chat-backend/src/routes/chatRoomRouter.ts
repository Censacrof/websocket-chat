import express from "express";
import * as RT from "runtypes";
import { ChatRoom, ChatRoomType } from "../model/chatRoom";

export const GetChatRoomResult = RT.Record({
  chatRooms: RT.Array(ChatRoom),
});

export type GetChatRoomResultType = RT.Static<typeof GetChatRoomResult>;

export const chatRoomRouterFactory = (chatRooms: ChatRoomType[]) => {
  const router = express.Router();

  router.get("/", (_, res) => {
    const data: GetChatRoomResultType = {
      chatRooms,
    };

    res.json(data);
  });

  return router;
};
