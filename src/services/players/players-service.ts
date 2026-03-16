import { noContent, ok } from "../../utilidades/http-helper";


export const getPlayerService = async () => {


    const data = {player: "Mbappé"};

    let response = null;

    if (data) {

       response = await ok(data);

    }else{

        response = await noContent();

    }
    

    return response ;

}