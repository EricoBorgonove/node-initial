import express from "express";
import dotenv from "dotenv";
import { prisma } from "./db/prisma.js";

import healthRoutes from "./routes/health.routes.js"
import usersRoutes from "./routes/users.routes.js"

const app = express();
dotenv.config();
app.use(express.json());

app.use(healthRoutes);
app.use(usersRoutes);

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