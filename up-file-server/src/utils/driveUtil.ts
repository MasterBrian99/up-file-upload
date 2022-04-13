import drive from "../configs/cloudConfig";
import { Readable } from "stream";
import mime from 'mime-types';
import path from 'path';
import { uploadResponseDto } from '../interface/drive-api.dto';


const uploadFile = async (buffer: Buffer | undefined, originalname: string | undefined): Promise<uploadResponseDto> => {

    const mineType = mime.lookup(path.extname(originalname!))

    try {
        const res = await drive.files.create({
            requestBody: {
                name: originalname, //file name
                mimeType: mineType?.toString(),
                parents: ['1S2WRQOMvr0WIGJ3shP0eyOXGvR0yvp6n']
            },
            media: {
                mimeType: mineType?.toString(),
                body: bufferToStream(buffer)
            },
        });

        // generateUrl(r)
        await generateUrl(res.data.id)
        return {
            code: 200,
            message: 'Success'
        }
    } catch (error) {
        console.log(error.message);

        return {
            code: 400,
            message: error.message
        }
    }
}


const generateUrl = async (id: string | undefined | null) => {
    try {
        const fileId = id!;
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
        console.log(result.data);
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
    uploadFile
}