import express from "express";
import dotenv from "dotenv";
import { prisma } from "./db/prisma.js";

const app = express();
dotenv.config();
app.use(express.json());

const port = Number(process.env.PORT);


// ultima coisa do arquivo por enquanto
app.listen (port, ()=> {
    console.log (`Server rodando em http://localhost:${port}`)
});

process.on ("SIGINT", async ()=>{
    await prisma.$disconnect();
    process.exit(0);
});
process.on ("SIGTERM", async ()=>{
    await prisma.$disconnect();
    process.exit(0);
});