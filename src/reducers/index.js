//this is like the global hub of all reducers. Called the global application state

import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBookReducer from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
