import { Request, Response } from "express";
import * as PlayerService from "../services/players/players-service";


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

    const playerData = req.body;    

}