import {Request,Response} from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController{
        async handle(request:Request , response : Response){
            const AuthUserService = new AuthenticateUserService();
            const {code} = request.body;

            try{
                const result = await AuthUserService.execute(code);
                return response.json(result)
            }catch(err){
                return response.json({error: err.message})
            }
            
        }

}




export {AuthenticateUserController}