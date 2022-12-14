import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import commentsSlice from "./slices/commentsSlice";
import newsSlice from "./slices/newsSlice";

export const store = configureStore({
  reducer: {
    news: newsSlice,
    comments: commentsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
