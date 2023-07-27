import { createStore, combineReducers, applyMiddleware } from 'redux';
import noteReducer from './reducers/noteReducer';
import summaryReducer from './reducers/summaryReducer';

const rootReducer = combineReducers({
  notesState: noteReducer,
  summaryState: summaryReducer,
});

const store = createStore(rootReducer);

export default store;

