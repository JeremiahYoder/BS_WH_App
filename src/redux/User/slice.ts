import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUsers, IUser} from './types';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: {},
    detailId: 0,
  } as IUsers,
  reducers: {
    setUsers(state, action: PayloadAction<IUser[]>) {
      action.payload.map(user => {
        state.users[user.id] = user;
      });
    },
    setCurrentUser(state, action: PayloadAction<number>) {
      state.detailId = action.payload;
    },
  },
});

export const {setUsers, setCurrentUser} = userSlice.actions;
export default userSlice.reducer;
