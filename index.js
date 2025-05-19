import dotenv from 'dotenv'
dotenv.config()


import mongoose from "mongoose";
mongoose.connect(process.env.DB_URL)


import express from "express";
const app = express()
app.listen(4444)

import bodyParser from 'body-parser';
import { signup , login} from './controller/user.controller.js';

app.use(express.static("view"))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.post('/api/signup', signup)
app.post('/api/login', login)