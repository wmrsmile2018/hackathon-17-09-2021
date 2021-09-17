import { createSlice } from "@reduxjs/toolkit";
// import { sagaEventCallBegan, sagaEventCallFail, sagaEventCallSuccess } from "../saga";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUser(state, action) {
      state.user = action.payload.success;
    },

    fetchError(state, action) {
      state.error = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(sagaEventCallBegan, (state) => {
  //   });
  //   builder.addCase(sagaEventCallSuccess, (state) => {
  //   });
  //   builder.addCase(sagaEventCallFail, (state) => {
  //   });
  // },
});

export default userSlice.reducer;

export const { getUser, fetchError } = userSlice.actions;
