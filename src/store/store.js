import { combineReducers, createStore } from "redux";
import addReduser from '../store/redusers/addReduser.js';
import modulsReduser from '../store/redusers/modulsReduser.js'


let combain = combineReducers({
    storeUsers: addReduser,
    storeModules: modulsReduser
    
})

let store = createStore(combain)

export default store