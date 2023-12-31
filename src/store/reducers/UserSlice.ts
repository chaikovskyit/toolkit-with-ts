import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';

interface UserState {
	users: IUser[];
	isLoading: boolean;
	error: string;
	count: number;
}

const initialState: UserState = {
	users: [],
	isLoading: false,
	error: '',
	count: 0,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		inc(state, action: PayloadAction<number>) {
			state.count = state.count + action.payload;
		},
	},
});

export default userSlice.reducer;
