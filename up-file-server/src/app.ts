import * as express from "express";
import morgan from 'morgan';
const app = express.default();
import { createProxyMiddleware } from 'http-proxy-middleware';
import { default as fileRouter } from "./controllers/file.controller";
import { generateUrl } from "./utils/driveUtil";

app.use(express.json())

app.use(morgan('combined'))


app.use('/api/file', fileRouter)
app.use('/api/get/:id', createProxyMiddleware({
    target: 'https://drive.google.com',
    changeOrigin: true, // needed for virtual hosted sites
    ws: true, // proxy websockets
    pathRewrite: function (path, req) {
        //Get the port number
        var file_id = req.originalUrl.split('/api/get/')[1];
        //Return the path with the api and portname removed
        return path.replace('/api/get/' + file_id, '');
    },
    router: async (req) => {
        const id = req.params.id;

        await generateUrl(id);
        return "https://drive.google.com/uc?id=18OHnxAyv9DPhoapL-6rtAMXUvE8B9sbr&export=download";
    }
}))
export default app;