import { combineReducers } from 'redux';
import filmReducer from './filmReducer';
import starshipReducer from './starshipReducer';

export default combineReducers({
    film: filmReducer,
    starship: starshipReducer,
});