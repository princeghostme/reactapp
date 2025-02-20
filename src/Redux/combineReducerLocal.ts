import { combineReducers } from "redux";
import userTokenReducer from './Reducers/userToken';
import plansReducer from './Reducers/Plans';

export default combineReducers({
    userToken : userTokenReducer,
    plans : plansReducer
})