import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const chooseApiName = createApi({
    reducerPath: "choseApiName",
    baseQuery: fetchBaseQuery({
        baseUrl: "",
    }),
    endpoints: (builder) => ({
        //endpoints for api
    }),
});

export const endpoints = chooseApiName;
