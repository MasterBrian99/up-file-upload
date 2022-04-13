import { google } from 'googleapis';


const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;


//refresh token
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;


const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);


//setting outr credentials
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

//initialize google drive
const drive = google.drive({
    version: 'v3',
    auth: oauth2Client,
});


export default drive;