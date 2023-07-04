import http from "../http-common";
import IPropertyInterface from "../interfaces/IPropertyInterface";

export const getProperties = () => {
    return http.get<Array<IPropertyInterface>>("/properties");
}

export const getProperty = (id: any) => {
    return http.get<IPropertyInterface>(`/properties/${id}`);
}

export const createProperty = (data: IPropertyInterface) => {
    return http.post<IPropertyInterface>(`/properties`, data);   
}

export const updateProperty = (id: any, data: IPropertyInterface) => {
    return http.put<any>(`/properties/${id}`, data);
}

export const deleteProperty = (id: any) => {
    return http.delete<any>(`/properties/${id}`);
}
export const filterProperties = (data : any) => {
    return http.post<any>(`/properties/filter`, data);
}
export const searchProperties = (data : any) => {
    return http.post<any>(`/properties/search`, data);
}

