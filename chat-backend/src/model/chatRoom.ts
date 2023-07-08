import * as RT from "runtypes";

export const ChatMessage = RT.Record({
  author: RT.String,
  text: RT.String,
  date: RT.InstanceOf(Date),
});
export type ChatMessage = RT.Static<typeof ChatMessage>;

export const ChatRoom = RT.Record({
  name: RT.String,
  messages: RT.Array(ChatMessage),
});
export type ChatRoom = RT.Static<typeof ChatRoom>;

const chatRooms: Map<string, ChatRoom> = new Map();

export const getChatRooms = () => new Map(chatRooms);

export const addChatRoom = (chatRoom: ChatRoom) => {
  chatRooms.set(chatRoom.name, { ...chatRoom });
};
