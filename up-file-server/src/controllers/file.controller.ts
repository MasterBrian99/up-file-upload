import { Request, Response } from "express";
import { Router } from "express";
import multer from 'multer';
import { uploadFile } from '../utils/driveUtil'
const storage = multer.memoryStorage()
const upload = multer({ storage: storage });
import { uploadResponseDto } from '../interface/drive-api.dto'
const router = Router();

router.post("/add", upload.single('file'), async (req: Request, res: Response) => {

    const buffer = req.file?.buffer;
    const originalname = req.file?.originalname;
    const data: uploadResponseDto = await uploadFile(buffer, originalname);

    res.send(data)

});



export default router;