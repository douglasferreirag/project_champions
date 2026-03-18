import * as HttpResponse from "../utilidades/http-helper";
import * as repository from "../repositories/clubs-repository";

export const getClubeService = async () => {

   const data = await repository.findAllClubs();

    const response = await HttpResponse.ok(data);

    return response;

}