import { getChatRooms } from "./chatRoom";

describe("ChatRoom DAO", () => {
  it("allows to create a new message in the chatRoom", async () => {
    expect(getChatRooms().entries.length).toEqual(0);
  });
});
