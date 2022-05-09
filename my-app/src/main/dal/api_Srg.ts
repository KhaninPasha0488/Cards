import axios from "axios";

export const instance = axios.create({
    // baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
})

// константы для отправки письма на почту для восстановления пароля
const from = "test-front-admin <ai73a@yandex.by>";
const message = `<div style=\"background-color: lime; padding: 15px\">password recovery link:
                <a href='http://localhost:3000/cards-project#/resetPassword/$token$'>link</a></div>`;

export const authAPI = {
    register(email: string | null, password: string | null) {
        return instance.post(`auth/register`, {email, password})
    },
    resetPassword(email: string) {
        return instance.post(`/auth/forgot`, {email, from, message})
    },
    createNewPassword(password: string | null, resetPasswordToken: string) {
        return instance.post(`/auth/set-new-password`, {password, resetPasswordToken})
    }
}