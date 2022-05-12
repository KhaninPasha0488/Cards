import axios, {AxiosResponse} from "axios";

 
export const instance = axios.create({
    //baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
})



export const authAPI = {
    login(email: string | null, password: string | null,rememberMe:boolean) {
        return instance.post<LoginResponseType>('auth/login', {email, password,rememberMe})
    }
}

// export type LoginParamsType ={
//     email:string,
//     password:string,
//     rememberMe:boolean

export type LoginResponseType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number;
// количество колод

    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;

    error?: string;
}