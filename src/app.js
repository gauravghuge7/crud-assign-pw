import express from "express";
import dotenv from "dotenv";
import cors from 'cors';

const app = express();

// dotenv file configuration 
dotenv.config({
    path: './.env'
})

/// middlewares for reading data

app.use(express.json());
app.use(express.urlencoded({extended: true}));

/// cors declaration for cross requests 

app.use(cors());

// import routes

import router from "./routes/user.route.js";

// routers declaration 

app.use('/', router);



export default app;

