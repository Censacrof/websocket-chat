import * as RT from "runtypes";

export const ChatRoom = RT.Record({
  name: RT.String,
});

export type ChatRoom = RT.Static<typeof ChatRoom>;
