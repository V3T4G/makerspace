import express from "express"
import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()


const rotaLogin = express.Router()
const JWT_SECRET = process.env.JWT_SECRET


rotaLogin.post('/login', async (req, res) => {
    try {
        const usuariologin = req.body
        const usuario = await prisma.usuario.findUnique({
            where: { email: usuariologin.email }
        })
        if (!usuario) {
            return res.status(404).json({ message: "Usuário não foi encontrado." })
        }

        const isMatch = await bcrypt.compare(usuariologin.senha, usuario.senha)
        if(!isMatch) {
            return res.status(400).json({ message: "Senha inválida..." })
        }


        const token = jwt.sign({id: usuario.id}, JWT_SECRET, {expiresIn: '7d'})

        
        
        res.status(200).json(token)


    } catch (err) {
        res.status(500).json({ message: "Erro no servidor." })
    }



})

export default rotaLogin 