import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

function renderQuestions(req,res){
    res.render('questions', {title: 'Lista de questões', tag: 'listquestion'})
}

function genQuestions(req, res){
    const discipline = req.params.nome
    res.render('discipline', {title: `Lista de questões - ${discipline}`, tag:'listquestion'})

}
async function getQuestions(req,res){
try{
const {nome} = req.body
if(!nome){
    res.cookie('errors', 'Ocorreu um erro ao buscar as questões.', {httpOnly: true, maxAge: 10000})
    return res.redirect('/')
}

const questions = await prisma.question.findMany({where: {
    discipline: nome
}})
if(!questions){
    res.cookie('errors', 'Questões não encontradas.', {httpOnly: true, maxAge: 10000})
    return res.redirect('/')
}

return res.json(questions)
}catch(err){
    res.cookie('errors', 'Ocorreu um erro ao buscar as questões.', {httpOnly: true, maxAge: 10000})
    return res.redirect('/')
}}







export {renderQuestions, genQuestions, getQuestions}