import { combineReducers } from "redux";
import favoriteAdvertReducer from "./reducers/favoriteAdvertReducer";

const rootReducer = combineReducers({
    favoriteAdverts : favoriteAdvertReducer
})

export default rootReducer;