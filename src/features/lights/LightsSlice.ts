import { createSlice } from "@reduxjs/toolkit";
import { LightsSliceType } from "types";

const initialState: LightsSliceType = {
    isOn: true,
};

const toggleLightSlice = createSlice({
    name: "switchTheme",
    initialState,
    reducers: {
        toogleLight: (state) => {
            state.isOn = !state.isOn;
        },
    },
});

export const { toogleLight } = toggleLightSlice.actions;

export default toggleLightSlice.reducer;
