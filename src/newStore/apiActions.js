import { createAction } from "@reduxjs/toolkit";

export const apiRequest = createAction("api/apiRequest");
export const apiCallSuccess = createAction("api/callSuccess");
export const apiCallFailed = createAction("api/callFailed");

