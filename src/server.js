import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(express.json());

const port = Number(process.env.PORT);

app.get("/health", (req, res) =>{
    res.status(208).json({
        ok: true,
        service: "api-simples"
    });
});

app.get("/teste", (req, res) =>{
    res.send("oi")
});


// ultima coisa do arquivo por enquanto
app.listen (port, ()=> {
    console.log (`Server rodando em http://localhost:${port}`)
});