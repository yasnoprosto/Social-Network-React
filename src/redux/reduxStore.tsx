import {combineReducers, legacy_createStore} from "redux"
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import navigationReducer from "./navigationReducer";


let reducers = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogsReducer,
    navigationData: navigationReducer,
})

let store = legacy_createStore(reducers);

export default store;
 