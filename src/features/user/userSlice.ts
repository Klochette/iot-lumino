import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userSliceType } from "types";

const initialState: userSliceType = {
    userType: "student",
    email: 'nawel.borini@hetic.net',
    identifier: "Nawel Borini",
    password: "gogog",
};

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        login: (
            state,
            { payload }: PayloadAction<{ identifier: string; password: string }>
        ) => {
            const { identifier, password } = payload;
            if (identifier.includes("hetic.net")) {
                state.identifier = identifier
                    .split("@")[0]
                    .split(".")
                    .join(" ");
                state.userType = "student";
                state.password = password;
                state.error = undefined;
                state.email = identifier;
            } else if (identifier.includes("hetic.fr")) {
                state.identifier = identifier
                    .split("@")[0]
                    .split(".")
                    .join(" ");
                state.userType = "admin";
                state.password = password;
                state.error = undefined;
                state.email = identifier;
            } else {
                state.error = "Wrong email";
            }
        },
        logout: (state) => {
            state.password = undefined;
            state.identifier = undefined;
            state.userType = undefined;
            state.error = undefined;
            state.email = undefined;
        },
        changePassword: (
            state,
            { payload }: PayloadAction<{ password: string }>
        ) => {
            state.password = payload.password;
        },
        setUserError: (
            state,
            { payload }: PayloadAction<{ error: string }>
        ) => {
            state.error = payload.error;
        },
    },
});

export const { login, logout, changePassword, setUserError } =
    userSlice.actions;

export default userSlice.reducer;
