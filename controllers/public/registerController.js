import { PrismaClient } from "@prisma/client"
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const prisma = new PrismaClient()

function renderRegister(req,res){
        try{
        const token = jwt.verify(req.cookies.token, process.env.SECRET_JWT)
        res.redirect('/home')
        }catch(err){
        res.render('register', {title: 'Registre-se aqui!'})
        }
    
}

async function handleRegister(req,res){
    const user = req.body

    if(!user.name || !user.email || !user.institution || !user.password || !user.role || !user.graduation || !user.course){
        return  res.redirect('/register')
    }

    if(!validator.isEmail(user.email)){
        return res.redirect('/register')
    }
    if(user.password.length < 5 || user.password.length > 50){
        res.cookie('errors', 'Password must be between 5 and 50 characters', {httpOnly: true, maxAge: 10000})
        return res.redirect('/register')
    }

   try{

    const emailExist = await prisma.user.findUnique({
        where: {
            email: user.email
        }
    })

    if(emailExist){
        res.cookie('errors', 'Esse E-mail já está em uso.', {httpOnly: true, maxAge: 10000})
        return res.redirect('/register')
    }


    const salt = await bcrypt.genSalt(10)
    const hashedPassword =  await bcrypt.hash(user.password, salt)
    await prisma.user.create({
        data: {
            name: user.name,
            email: user.email,
            institution: user.institution,
            graduation: user.graduation,
            role: user.role,
            course: user.course,
            password: hashedPassword
        }
    })
    res.cookie('success', 'Conta criada com sucesso!', {httpOnly: true, maxAge: 10000})
    res.clearCookie('token')
    return res.redirect('/login')
   }catch(err){
    console.log(err)
    return res.redirect('/register')
   }
}





export {renderRegister, handleRegister}