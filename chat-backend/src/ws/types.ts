import * as RT from "runtypes";

export const ErrorResponse = RT.Record({
  status: RT.Literal("error"),
  reason: RT.String,
  message: RT.Optional(RT.String),
  data: RT.Optional(RT.Unknown),
});
export type ErrorResponse = RT.Static<typeof ErrorResponse>;

export const OkResponse = RT.Record({
  status: RT.Literal("ok"),
  data: RT.Optional(RT.Unknown),
});
export type OkResponse = RT.Static<typeof OkResponse>;

export const Response = RT.Union(OkResponse, ErrorResponse);
export type Response = RT.Static<typeof Response>;
