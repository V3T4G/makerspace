import express from 'express'
import rotaCadastro from './rotas/rotaCadastro.js'
import rotaLogin from './rotas/rotaLogin.js'
import loginOk from './rotas/loginOk.js'
import autenticador from './middlewares/auteticador.js'




const app = express()




app.use(express.json())
app.use('/', rotaCadastro)
app.use('/', rotaLogin)
app.use('/', autenticador, loginOk)



app.listen(3000, () => console.log('Server rodando na 3000'));


//senha ywQvISDT3fAjh5C9