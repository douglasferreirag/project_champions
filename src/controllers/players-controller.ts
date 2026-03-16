import { Request, Response } from "express";
import { getPlayerService } from "../services/players/players-service";
import { ok } from "../utilidades/http-helper";

export const getPlayer = async (req: Request, res: Response) => {
    
    const data = await getPlayerService();

    const httpResponse = await ok(data);
    
    res.status(httpResponse.statusCode).json(httpResponse.body);

    


}