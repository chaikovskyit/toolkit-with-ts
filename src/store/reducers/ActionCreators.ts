import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch } from './../store';
import { IUser } from '../../models/IUser';
import { userSlice } from './UserSlice';

//Clasick redux request
// ============================================================================================
// export const fetchUsers = () => async (dispatch: AppDispatch) => {
// 	try {
// 		dispatch(userSlice.actions.usersFetching());
// 		const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
// 		dispatch(userSlice.actions.usersFetchingSuccess(response.data));
// 	} catch (e) {
// 		dispatch(userSlice.actions.usersFetchingError('Something went wrong...'));
// 	}
// };
// ============================================================================================

//Redux toolkit requst
//не треба нічого діспачити бо в слайсі є extraRedusers який всьо шарить сам
export const fetchUsers = createAsyncThunk('user/fetchAll', async (_, thunkAPI) => {
	try {
		const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
		return response.data;
	} catch (e) {
		return thunkAPI.rejectWithValue('Can not load the posts...!!!');
	}
});
