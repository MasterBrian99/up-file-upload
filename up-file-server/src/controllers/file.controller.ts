import { Request, Response } from "express";
import { Router } from "express";
import multer from 'multer';
import { uploadFile } from '../utils/driveUtil'
const storage = multer.memoryStorage()
const upload = multer({ storage: storage });
import { uploadResponseDto } from '../interface/drive-api.dto'
import { addFileService, findByURLId } from "../services/file.service";

const router = Router();

router.post("/add", upload.single('file'), async (req: Request, res: Response) => {

    const buffer = req.file?.buffer;
    const originalname = req.file?.originalname;
    const minetype = req.file?.mimetype



    const data: uploadResponseDto = await uploadFile(buffer, originalname, minetype);


    if (data.code = 200) {
        const url = await addFileService(data.data, originalname);
        console.log(url);

    }
    res.send(data)

});

router.get('/find', async (req: Request, res: Response) => {
    const { id } = req.body;
    const requestedUrl = req.protocol + '://' + req.get('Host');

    if (id == undefined || id == null) {
        res.send('')
    }


    await findByURLId(id, requestedUrl);
})


export default router;