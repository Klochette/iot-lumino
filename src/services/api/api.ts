import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BookARoomType, QueryBookingFromARoomType, QueryRoomType } from "types";

// Define a service using a base URL and expected endpoints
export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://35.180.13.188",
    }),
    endpoints: (builder) => ({
        apiRooms: builder.query<QueryRoomType, undefined>({
            query: () => `/getAllRoom`,
        }),
        apiBookingFromARoom: builder.query<QueryBookingFromARoomType, string>({
            query: (roomName) => `/getAllBookingFromARoom/${roomName}`,
        }),
        apiBookARoom: builder.mutation<any, BookARoomType>({
            query: (queryArg) => ({
                url: `/bookaroom`,
                method: "POST",
                body: queryArg,
            }),
        }),
        apiGetBokingByRoomId: builder.query({
            query: (roomId) => `/getBookingByRoomId/${roomId}`,
        }),
        apiDeleteBooking: builder.mutation({
            query: (queryArg) => ({
                url: "/removeABooking",
                method: "POST",
                body: queryArg,
            }),
        }),
        apiGetRoom: builder.query({
            query: (roomId) => `/getRoomInfoByIdRoom/${roomId}`,
        }),
        apiGetBookingByEmail: builder.query({
            query: (email) => `getBookingByEmail/${email}`,
        }),
    }),
});

export const {
    useApiRoomsQuery,
    useApiBookingFromARoomQuery,
    useApiGetBokingByRoomIdQuery,
    useApiGetRoomQuery,
    useApiGetBookingByEmailQuery,
    //POST
    useApiDeleteBookingMutation,
    useApiBookARoomMutation,
} = api;
