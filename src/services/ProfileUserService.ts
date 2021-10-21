
import prismaClient from "../prisma"



class ProfileUserService{
    async execute (user_id:string){
        console.log("id usuario :",user_id)
        const profile = await prismaClient.user.findFirst({
           where:{
               id:user_id
           }
        })
        console.log(profile)
        return profile
    }
}

export {ProfileUserService}