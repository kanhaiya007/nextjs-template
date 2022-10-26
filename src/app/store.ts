import { configureStore, isRejectedWithValue } from "@reduxjs/toolkit";
import type { Middleware, MiddlewareAPI } from "@reduxjs/toolkit";

const middleWareForLogging: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      if (+action.payload?.originalStatus === 401) {
        alert("Your session is expired, please login again to continue.");
        window.location.replace("/store/auth");
      }
    }
    return next(action);
  };

export const store = configureStore({
  // Add Reducers made inside feature/[slice file]
  reducer: {
  },
  middleware: (getDefaultMiddleware) => {
    // Add all the api middlewares here
    return getDefaultMiddleware().concat([
      middleWareForLogging,
    ]);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
