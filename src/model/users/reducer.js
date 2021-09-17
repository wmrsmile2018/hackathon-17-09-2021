import { createSlice } from "@reduxjs/toolkit";
// import { sagaEventCallBegan, sagaEventCallFail, sagaEventCallSuccess } from "../saga";

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers(state, action) {
      state.users = action.payload;
    },

    fetchUsersError(state, action) {
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

export default usersSlice.reducer;

export const { getUsers, fetchUsersError } = usersSlice.actions;
