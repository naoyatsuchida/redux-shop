import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./features/cart/CartSlice";
import { cartSlice } from "./features/cart/CartSlice";
/*
store：アプリ内で使用する状態を管理するための枠組み。この中にsliceが内包されている。

slice:状態とreducer,actionCreatorを含んだもの

reducer:stateを変更更新するための唯一の手段。関数
*/

export const store = configureStore({
  reducer: {
    // cart: cartReducer.reducer,
    cart: cartSlice.reducer,
  },
});
