import express from "express";
import * as RT from "runtypes";
import { ChatRoom, ChatRoomType } from "../model/chatRoom";

export const GetChatRoomResult = RT.Record({
  chatRooms: RT.Array(ChatRoom),
});
export type GetChatRoomResultType = RT.Static<typeof GetChatRoomResult>;

export const CreateChatRoomResult = ChatRoom;
export type CreateChatRoomResultType = RT.Static<typeof CreateChatRoomResult>;
export const CreateChatRoomArgs = ChatRoom;
export type CreateChatRoomArgsType = RT.Static<typeof CreateChatRoomArgs>;

export const chatRoomRouterFactory = (chatRooms: ChatRoomType[]) => {
  const router = express.Router();
  router.use(express.json());

  router.get("/", (_, res) => {
    const data: GetChatRoomResultType = {
      chatRooms,
    };

    res.json(data);
  });

  router.post("/", (req, res) => {
    let data;
    try {
      data = CreateChatRoomArgs.check(req.body);
    } catch (e) {
      res.status(400).send(e);
      return;
    }
    // if (!CreateChatRoomArgs.guard(data)) {
    //   res.status(400).send({
    //     error: "Invalid chatRoom",
    //   });
    // }

    chatRooms.push(data);
    res.status(200).send(data satisfies CreateChatRoomResultType);
  });

  return router;
};
