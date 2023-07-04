import { getAuthenticatedUser } from "../api/UserApi"

export const getUserInfo = async () => {
    try {
        const {data} = await getAuthenticatedUser();
        return data;
    } catch (error : any) {
        return error;        
    }
}