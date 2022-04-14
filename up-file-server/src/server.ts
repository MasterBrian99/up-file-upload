import app from './app';
import 'dotenv/config'
import databaseClient from './configs/prismaConfig';

const PORT = Number(process.env.PORT) || 3000;

// start express server on port 5000
const startServer = async () => {
    await databaseClient();
    app.listen(PORT, () => {
        console.log(`server started on port ${PORT}`);
    });
};

(() => {
    startServer();
})();