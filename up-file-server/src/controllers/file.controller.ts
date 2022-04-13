import { Request, Response } from "express";
import { Router } from "express";
import multer from 'multer';

const storage = multer.memoryStorage()
import drive from '../configs/cloudConfig';
import { Readable } from "stream";
const upload = multer({ storage: storage });

const router = Router();

router.post("/add", upload.single('file'), async (req: Request, res: Response) => {
    const title = req.body.title;
    const file = req.file;
    const buffer = req.file?.buffer;
    console.log(title);
    console.log(file);
    await uploadFile(buffer);

    res.send('Hello')

});

async function uploadFile(buffer: Buffer | undefined) {
    try {
        const response = await drive.files.create({
            requestBody: {
                name: 'hero1.png', //file name
                mimeType: 'image/png',
                parents: ['1S2WRQOMvr0WIGJ3shP0eyOXGvR0yvp6n']
            },
            media: {
                mimeType: 'image/png',
                body: bufferToStream(buffer)
            },
        });

        console.log(response.data);
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

export default router;