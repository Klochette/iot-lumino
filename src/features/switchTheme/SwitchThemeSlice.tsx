import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { ThemeSliceType } from "types";

const initialState: ThemeSliceType = {
    isLightMode: true,
};

const switchThemeSlice = createSlice({
    name: "switchTheme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.isLightMode = !state.isLightMode;
        },
    },
});

export const selectRoot = (state: RootState): ThemeSliceType | undefined =>
    state.switchTheme;

export const { toggleTheme } = switchThemeSlice.actions;

export default switchThemeSlice.reducer;
