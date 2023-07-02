import http from "../http-common";
import IUserInterface from "../interfaces/IUserInterface";

export const createUser = (data: IUserInterface) => {
    return http.post<any>(`/auth/register`, data);   
}

export const loginUser = ( data: IUserInterface) => {
    return http.post<IUserInterface>(`/auth/login`, data);
}


