import express from "express"
import { PrismaClient } from "@prisma/client"

const loginOk = express.Router()
const prisma = new PrismaClient()

loginOk.get('/loginOk', async (req, res) => {
    try {
        const usuariosCadastrados = await prisma.usuario.findMany()
        res.status(200).json({ message: 'Usuarios listado com sucesso', usuariosCadastrados })

    } catch (err) {
        res.status(400).json({ message: "Erro no serviço." })

    }
})

export default loginOk