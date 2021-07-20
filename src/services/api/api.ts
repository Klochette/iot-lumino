import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
    BookARoomType,
    BookingFromARoomQueryType,
    QueryARoomType,
} from "types";

// Define a service using a base URL and expected endpoints
export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api-oit.herokuapp.com",
    }),
    endpoints: (builder) => ({
        apiRooms: builder.query<QueryARoomType, undefined>({
            query: () => `/getAllRoom`,
        }),
        apiBookingFromARoom: builder.query<BookingFromARoomQueryType, string>({
            query: (roomName) => `/getAllBookingFromARoom/${roomName}`,
        }),
        apiBookARoom: builder.mutation<any, BookARoomType>({
            query: (queryArg) => ({
                url: `/bookaroom`,
                method: "POST",
                body: queryArg,
            }),
        }),
    }),
});

export const {
    useApiRoomsQuery,
    useApiBookingFromARoomQuery,
    //POST
    useApiBookARoomMutation,
} = api;
