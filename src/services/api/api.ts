import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BookARoomType, QueryBookingFromARoomType, QueryRoomType } from "types";

// Define a service using a base URL and expected endpoints
export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api-oit.herokuapp.com",
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
        apiDeleteBooking: builder.query({
            query: (queryArg) =>
                `/removeABooking/${queryArg.idBooking}/${queryArg.idRoom}`,
        }),
        apiGetRoom: builder.query({
            query: (roomId) => `/getRoomInfoByIdRoom/${roomId}`,
        }),
    }),
});

export const {
    useApiRoomsQuery,
    useApiBookingFromARoomQuery,
    useApiGetBokingByRoomIdQuery,
    useApiDeleteBookingQuery,
    useApiGetRoomQuery,
    //POST
    useApiBookARoomMutation,
} = api;
