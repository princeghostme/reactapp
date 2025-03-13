import { combineReducers } from "redux";
import userTokenReducer from './Reducers/userToken';
import subscriptionReducer from './Reducers/Subscriptions';

export default combineReducers({
    userToken : userTokenReducer,
    subscribtions : subscriptionReducer
})