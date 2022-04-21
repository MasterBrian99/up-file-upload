import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { v4 as uuidv4 } from 'uuid';



const addFileService = async (id: string, originalname: string | undefined): Promise<string> => {

    const res = await prisma.fileList.create({
        data: {
            filename: originalname == undefined ? uuidv4() : originalname,
            deleted_at: new Date(Date.now()),
            file_id: id,

        }
    })


    return res.unique_url_id;
}

const generateURL = async (requestedUrl: string, unique_url_id: string) => {
    const url = `${requestedUrl}/api/get/${unique_url_id}`
    console.log(url);

}

const findByURLId = async (id: string, requestedUrl: string) => {
    const res = await prisma.fileList.findFirst({
        where: {
            unique_url_id: id
        }
    })

    if (res !== null) {
        console.log(await generateURL(requestedUrl, id));

    }

}

const findFileID = async (id: string | null | undefined) => {
    const res = await prisma.fileList.findFirst({
        where: {
            unique_url_id: id!
        }
    })

    if (res != null) {
        return res.file_id;
    }
    return "";
}

export {
    addFileService,
    findByURLId,
    findFileID
}
