import * as RT from "runtypes";

export const ErrorResponse = RT.Record({
  status: RT.Literal("error"),
  reason: RT.String,
  message: RT.Optional(RT.String),
  data: RT.Optional(RT.Unknown),
});
export type ErrorResponseType = RT.Static<typeof ErrorResponse>;

export const OkResponse = RT.Record({
  status: RT.Literal("ok"),
  data: RT.Optional(RT.Unknown),
});
export type OkResponseType = RT.Static<typeof OkResponse>;

export const Response = RT.Union(OkResponse, ErrorResponse);
export type ResponseType = RT.Static<typeof Response>;
