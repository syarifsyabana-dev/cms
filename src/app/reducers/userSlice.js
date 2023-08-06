import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import APIS from "../../apis";
import { getHeader } from "../../utils/headers";

const initialState = {
  isLoading: false,
  datas: [],
  detail: {},
  error: null,
};

export const doFetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const res = await axios.get(APIS.USERS, { headers: getHeader() });
  const { data } = await res.data;
  return data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserIsLoadingOn: (state) => {
      state.isLoading = true;
    },
    setUserIsLoadingOff: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(doFetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(doFetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.datas = action.payload;
    });
    builder.addCase(doFetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { setUserIsLoadingOn, setUserIsLoadingOff } = userSlice.actions;

export default userSlice.reducer;
