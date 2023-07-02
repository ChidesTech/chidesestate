import http from "../http-common";
import IEstateInterface from "../interfaces/IEstateInterface";

export const getEstates = () => {
    return http.get<Array<IEstateInterface>>("/estates");
}

export const getEstate = (id: any) => {
    return http.get<IEstateInterface>(`/estates/${id}`);
}

export const createEstate = (data: IEstateInterface) => {
    return http.post<IEstateInterface>(`/estates`, data);   
}

export const updateEstate = (id: any, data: IEstateInterface) => {
    return http.put<any>(`/estates/${id}`, data);
}

export const deleteEstate = (id: any) => {
    return http.delete<any>(`/estates/${id}`);
}
export const searchEstates = (data : any) => {
    return http.post<any>(`/estates/search`, data);
}

