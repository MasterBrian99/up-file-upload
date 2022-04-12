import app from './app';

const PORT = Number(process.env.PORT) || 3001;

// start express server on port 5000
const startServer = () => {
    app.listen(PORT, () => {
        console.log(`server started on port ${PORT}`);
    });
};

(() => {
    startServer();
})();