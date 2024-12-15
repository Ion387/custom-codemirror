import { configureStore } from "@reduxjs/toolkit";

import loadingReducer from "./loadingReducer.js";
import codemirrorReducer from "./codemirrorReducer.js";

let store = configureStore({
  reducer: {
    CM: codemirrorReducer,
    loading: loadingReducer,
  },
});

window.store = store;
export default store;
