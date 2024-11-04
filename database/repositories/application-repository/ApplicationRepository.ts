import { PrismaClient, Prisma } from "@prisma/client";


export class ApplicationRepository {

    private prismaClient : PrismaClient = new PrismaClient();

    createApplication: (application: ApplicationEntity) => Promise<ApplicationEntity> = async (application: ApplicationEntity) : Promise<ApplicationEntity> => {

        try{

            let expiration : Date =  new Date();

            expiration.setTime(new Date().getTime() + (60*60*1000*Number(process.env.EXPIRATION_TIME_HOURS)));
            
            const entity : ApplicationEntity = {
                id: 1,
                isActive: true,
                updatedAt: new Date(),
                incidentId: null,
                crmProcessId: null,
                expirationAt: expiration,
                deletedAt: null,
                phoneNumberHash: null,
                userId: 1,
                user: application.user,
                uuid: undefined
            };

            return entity;

        }finally{
            console.log("Stopping trace");
        }
    } 
}