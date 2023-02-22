import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const USER_SOMETHING = 'USER_SOMETHING';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    something: 'Something',
  },
  reducers: {
    setSomething(state, action: PayloadAction<string>) {
      state.something = action.payload;
    },
  },
});

export const {setSomething} = userSlice.actions;
export default userSlice.reducer;
