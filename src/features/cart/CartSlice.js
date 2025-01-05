import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
/*
sliceとは特定のstateに対して対応する初期値や名前、reducerと呼ばれるstateを操作するための関数処理を設定するフェーズ
*/

const initialState = {
  cartItems: cartItems,
  amount: 1,
  total: 0,
};

/*
name:sliceを識別するための識別子
initialState:初期値
reducers:関数
*/
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

// export default cartSlice.reducer;
