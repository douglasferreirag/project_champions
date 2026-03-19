import express from "express";

import router from "./routes";

import cors from 'cors';       
import { METHODS } from "node:http";



function createApp() {

        const app = express();

        app.use(express.json());

        app.use("/api", router);

        //Delimitando quem pode usar a api no corsOption

        const corsOptions = {

                origin: ['http://douglas.system.com', "http://gov.br"],
                METHODS : ['GET', "UPDATE" ]       
        }

        app.use(cors());

        return app;


}





export default createApp;


