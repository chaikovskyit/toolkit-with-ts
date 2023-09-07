import React from 'react';

import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';

function App() {
	const { count } = useAppSelector((state) => state.userReducer);
	const { inc } = userSlice.actions;
	const dispatch = useAppDispatch();

	return (
		<div className='App'>
			<h1>Hello Redux Counter: {count}</h1>
			<button onClick={() => dispatch(inc(13))}>Increment</button>
		</div>
	);
}

export default App;
