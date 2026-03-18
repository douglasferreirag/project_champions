import { Request, Response } from "express";
import * as PlayerService from "../services/players/players-service";
import { noContent } from "../utilidades/http-helper";


export const getPlayer = async (req: Request, res: Response) => {
    
    const httpResponse = await PlayerService.getPlayerService(); 
    
    res.status(httpResponse.statusCode).json(httpResponse.body);


}

export const getPlayerById = async (req: Request, res: Response) => {

    const id = req.params.id;
    
    const httpResponse = await PlayerService.getPlayerByIdService(Number(id));
    
    res.status(httpResponse.statusCode).json(httpResponse.body);

}

export const postPlayer = async (req: Request, res: Response) => {

    const bodyValue = req.body;  
    
    const httpResponse = await PlayerService.createPlayerService(bodyValue);

    if(httpResponse) {

        res.status(httpResponse.statusCode).json(httpResponse.body);
    
        
    } 

   
    

}

export const deletePlayer = async (req: Request, res: Response) => {

    throw new Error("Function not implemented.");

    const id = req.params.id;

    const httpResponse = await PlayerService.deletePlayerService(Number(id));

    res.status(httpResponse.statusCode).json(httpResponse.body);

}
