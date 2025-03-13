import { combineReducers } from "redux";
import plansReducer from './Reducers/Plans';

export default combineReducers({
    plans : plansReducer,
});