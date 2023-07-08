import { addChatRoom, getChatRooms } from "./chatRoom";

describe("ChatRoom DAO", () => {
  it("allows to create a new message in the chatRoom", async () => {
    expect(getChatRooms().entries.length).toEqual(0);

    addChatRoom({
      name: "A chat room",
      messages: [],
    });

    expect(getChatRooms().get("A chat room")).toEqual({
      name: "A chat room",
      messages: [],
    });
  });
});
