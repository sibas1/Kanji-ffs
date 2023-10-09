import express, { json } from 'express'
import morgan from 'morgan';
import  routersAuth from "./routes/auth.js"
import routersKanji from "./routes/kinjisrouters.js"
import coockeiParcer from 'cookie-parser'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(morgan('dev'))
app.use(express.json())
app.use(coockeiParcer())
app.use("/api",routersAuth)
app.use(routersKanji)
export default app;
