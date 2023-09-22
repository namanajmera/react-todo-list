import { combineReducers } from '@reduxjs/toolkit';
import { todoSlice } from './slice/todoSlice'; // Adjust the path to your todoSlice file

const rootReducer = combineReducers({
    todos: todoSlice.reducer,
    // Add more slices/reducers here if needed
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
