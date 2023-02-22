import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const USER_SOMETHING = 'USER_SOMETHING';

import {IUsers, IUser} from './types';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    detailId: null,
  } as IUsers,
  reducers: {
    setUsers(state, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
    },
    setUserId(state, action: PayloadAction<number | null>) {
      state.detailId = action.payload;
    },
  },
});

export const {setUsers, setUserId} = userSlice.actions;
export default userSlice.reducer;
