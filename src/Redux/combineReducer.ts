import { combineReducers } from "redux";
import TokenReducer from './Reducers/userToken';
import plansReducer from './Reducers/Plans';

export default combineReducers({
    User : TokenReducer,
    plans : plansReducer
});