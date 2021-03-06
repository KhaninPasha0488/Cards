import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer} from "./loginReducer";
import { registrationReducer } from "./registrationReducer";
import { profileReducer } from "./profileReducer";
import { resetPasswordReducer } from "./resetPasswordReducer";
import { createNewPasswordReducer } from "./createNewPasswordReducer";
import { error404Reducer } from "./error404Reducer";
import {appReducer} from "./appReducer";
import {packsReducer} from "./packsReducer";
import {cardsReducer} from "./cardsReducer";



const rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    profile: profileReducer,
    resetPassword: resetPasswordReducer,
    createNewPassword: createNewPasswordReducer,
    error404: error404Reducer,
    app: appReducer,
    packs: packsReducer,
    cards: cardsReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
export type RootStateType = ReturnType<typeof rootReducer>;