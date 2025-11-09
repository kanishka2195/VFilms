import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./slice/contactSlice";

const store = configureStore({
  reducer: {
    contact: contactReducer
  }
});

export default store;
