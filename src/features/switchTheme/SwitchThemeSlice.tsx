import { createSlice } from "@reduxjs/toolkit";
import { ThemeSliceType } from "types";

const initialState: ThemeSliceType = {
    isDarkMode: false,
};

const switchThemeSlice = createSlice({
    name: "switchTheme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
    },
});

export const { toggleTheme } = switchThemeSlice.actions;

export default switchThemeSlice.reducer;
