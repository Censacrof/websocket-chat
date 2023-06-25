import express from "express";
import { ChatRoom } from "../model/chatRoom";

export const chatRoomRouterFactory = (chatRooms: ChatRoom[]) => {
  const router = express.Router();

  router.get("/", (req, res) => {
    res.json(chatRooms);
  });

  return router;
};
