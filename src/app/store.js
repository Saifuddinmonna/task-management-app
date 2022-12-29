import { configureStore } from "@reduxjs/toolkit";
import 
TasksReducer from "../fetaures/books/TasksSlice";

const store = configureStore({
  reducer: {
    
    TasksReducer: 
    TasksReducer,
  },
});

export default store;
