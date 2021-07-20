import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "",
    }),
    endpoints: (builder) => ({
        apiQueryRooms: builder.query({
            query: () => `/getAllRoom`,
        }),
        apiBookingFromARoom: builder.query({
            query: (roomName) => `/getAllBookingFromARoom/${roomName}`,
        }),
        apiBookARoom: builder.mutation<
            any,
            { nameRoom: string; start: number; end: number; email: number }
        >({
            query: (queryArg) => ({
                url: `/bookARoom`,
                method: "POST",
                body: queryArg,
            }),
        }),
    }),
});

export const {
    useApiQueryRoomsQuery,
    useApiBookARoomMutation,
    useApiBookingFromARoomQuery,
} = api;
