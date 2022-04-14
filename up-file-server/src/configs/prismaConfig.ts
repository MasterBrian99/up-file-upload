import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const databaseClient = async () => {
    prisma.$connect().then(() => {
        console.log('connected !');

    }).finally(() => {
        prisma.$disconnect()
    })

}
export default databaseClient;