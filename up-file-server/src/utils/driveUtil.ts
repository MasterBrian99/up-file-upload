import drive from "../configs/cloudConfig";
import { Readable } from "stream";
import { uploadResponseDto } from '../interface/drive-api.dto';
import { findFileID } from "../services/file.service";


const uploadFile = async (buffer: Buffer | undefined, originalname: string | undefined, minetype: string | undefined): Promise<uploadResponseDto> => {
    try {
        const res = await drive.files.create({
            requestBody: {
                name: originalname, //file name
                mimeType: minetype,
                parents: ['1S2WRQOMvr0WIGJ3shP0eyOXGvR0yvp6n']
            },
            media: {
                mimeType: minetype,
                body: bufferToStream(buffer)
            },
        });


        return {
            code: 200,
            message: 'Success',
            data: res.data.id!
        }
    } catch (error) {
        console.log(error.message);

        return {
            code: 400,
            message: error.message,
            data: ''
        }
    }
}


const generateUrl = async (id: string | undefined | null) => {
    const data = await findFileID(id);

    try {
        const fileId = data;
        //change file permisions
        await drive.permissions.create({
            fileId: fileId,
            requestBody: {
                role: 'reader',
                type: 'anyone',
            },
        });

        const result = await drive.files.get({
            fileId: fileId,
            fields: 'webViewLink, webContentLink',
        });
        console.log(result.data.webContentLink);
    } catch (error) {
        console.log(error.message);
    }
}

function bufferToStream(buffer: any) {
    var stream = new Readable();
    stream.push(buffer);
    stream.push(null);

    return stream;
}

export {
    uploadFile,
    generateUrl
}