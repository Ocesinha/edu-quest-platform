import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcrypt'
import jwt from  'jsonwebtoken'

const prisma = new PrismaClient()

function renderLogin(req,res){
    try{
    const token = jwt.verify(req.cookies.token, process.env.SECRET_JWT)
    res.redirect('/home')
    }catch(err){
    res.render('login', {title: 'Faça Login!'}) 
    }

}
async function loginController(req,res){
    const user = req.body
    try{    
    
    if(!user.email || !user.password){
        res.cookie('errors', 'Preencha todos os campos.', {httpOnly: true, maxAge: 10000})
        return res.redirect('/login')
    }

    const userExist = await prisma.user.findUnique({where: {
        email: user.email
    }})

    if(!userExist){
        res.cookie('errors', 'Credenciais inválidas.', {httpOnly: true, maxAge: 10000})
        return res.redirect('/login')
    }

    const verifyPassword = await bcrypt.compare(user.password, userExist.password)

    if(!verifyPassword){
        res.cookie('errors', 'Credenciais inválidas.', {httpOnly: true, maxAge: 10000})
        return res.redirect('/login')
    }

    res.clearCookie('token')
    const token = jwt.sign({id: userExist.id}, process.env.SECRET_JWT, {expiresIn: '7d'})
    res.cookie('token', token, {httpOnly: true, maxAge: 60000 * 60 * 24 * 7} )   


    res.cookie('success', 'Login efetuado com sucesso.', {httpOnly: true, maxAge: 10000})
    return res.redirect('/home')


    }catch(err){
        console.log(err)
        res.cookie('errors', 'Ocorreu um erro ao efetuar login.', {httpOnly: true, maxAge: 10000})
        return res.redirect('/login')
    }
}




export {renderLogin, loginController}