import express from "express";
import { ChatRoom } from "../model/chatRoom";

export const chatRoomRouterFactory = (chatRooms: ChatRoom[]) => {
  const router = express.Router();
  return router;
};
