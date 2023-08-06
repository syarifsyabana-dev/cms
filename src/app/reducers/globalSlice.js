import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  title: "",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setGlobalLoadingOn: (state) => {
      state.isLoading = true;
    },
    setGlobalLoadingOff: (state) => {
      state.isLoading = false;
    },
    setGlobalTitle: (state, action) => {
      state.title = action.payload
    }
  },
});

export const { setGlobalLoadingOff, setGlobalLoadingOn, setGlobalTitle } = globalSlice.actions;

export default globalSlice.reducer;
