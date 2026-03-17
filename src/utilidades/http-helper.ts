import { HttpResponse } from "../models/http-response-model";



export const ok = async (data: any): Promise<HttpResponse> => ({
    statusCode: 200,
    body: data
}); 

export const created = async (): Promise<HttpResponse> => ({
    statusCode: 201,
    body: null
}); 

export const noContent = async (): Promise<HttpResponse> => ({
    statusCode: 204,
    body: {

        message: "Sucessfully",

    }
}); 

export const badRequest = async (): Promise<HttpResponse> => ({
    statusCode: 400,
    body: null
}); 


