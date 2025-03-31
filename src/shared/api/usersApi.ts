import { AxiosResponse } from 'axios'
import { instance } from '../api/instance'
import { LoginUserType, LoginUserResponseType } from '../types/usersTypes'

export const usersApi = {
    postLoginUser(user: LoginUserType) {
        return instance.post<LoginUserResponseType, AxiosResponse<LoginUserResponseType>, LoginUserType>('/auth/login', user);
    }
}