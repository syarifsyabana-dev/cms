import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import globalReducer from "./reducers/globalSlice";

const store = configureStore({
  reducer: {
    global: globalReducer,
    user: userReducer,
  },
});

export default store;
