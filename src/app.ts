import express, { Request, Response } from "express";


function createApp() {

        const app = express();

        app.use(express.json());

        app.get("/", (req: Request, res: Response) => {
            res.status(201).json({player: "Halland"});
        });

        return app;


}


export default createApp;


