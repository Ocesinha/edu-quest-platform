import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function auth(req,res,next){
    const token = req.cookies.token || null
        if(!token){
        res.clearCookie('token')
        res.cookie('errors', 'Faça login para acessar essa página!', {httpOnly: true, maxAge: 10000})
        return res.redirect('/')
    }
    try{
    const decoded = jwt.verify(token, process.env.SECRET_JWT)
    const user = await prisma.user.findUnique({where:{
        id: decoded.id
    }, select: {
        id: true,
        name: true,
        role: true,
        institution: true,
        email: true,
        graduation: true,
        course: true,
        questions: true
    }})

    res.locals.user = user;
    next()
    }catch(err){
        res.clearCookie('token')
        res.cookie('errors', 'Faça login para acessar essa página!', {httpOnly: true, maxAge: 10000})
        return res.redirect('/')
    }
    




}