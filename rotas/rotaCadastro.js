import express from "express"
import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcrypt'


const rotaCadastro = express.Router()
const prisma = new PrismaClient()




rotaCadastro.post('/cadastro', async (req, res) => {
    try {
        const usuario = req.body

        const salt = await bcrypt.genSalt(10)
        const hashSenha = await bcrypt.hash(usuario.senha, salt)


            const usuarioDB = await prisma.usuario.create({
            data: {
                nome: usuario.nome,
                email: usuario.email,
                senha: hashSenha,
                cep: usuario.cep,
            },
        })
        res.status(201).json(usuarioDB)
    } catch(err){
        res.status(500).json({ message: "Erro no servidor." })
    }

})

export default rotaCadastro 