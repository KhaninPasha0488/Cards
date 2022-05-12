import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer} from "./loginReducer";
import { registrationReducer } from "./registrationReducer";
import { profileReducer } from "./profileReducer";
import { resetPasswordReducer } from "./resetPasswordReducer";
import { createNewPasswordReducer } from "./createNewPasswordReducer";
import { error404Reducer } from "./error404Reducer";
import {appReducer} from "./appReducer";
import {packsReducer} from "./api/paks-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";



const rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    profile: profileReducer,
    resetPassword: resetPasswordReducer,
    createNewPassword: createNewPasswordReducer,
    error404: error404Reducer,
    app: appReducer,
    packs:packsReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
export type RootStateType = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()