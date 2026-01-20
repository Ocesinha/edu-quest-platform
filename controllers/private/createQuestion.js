import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

function renderCreatequestion(req,res){
    res.render('createquestion', {title: 'Criar questões', tag: 'question'})
}
async function Createquestion(req,res){
    const question = req.body
    try{

    if(!question.title || !question.difficult || !question.content || !question.question_command || !question.alternatives || !question.correct_alternative || !question.discipline || !question.creatorId){
        res.cookie('errors', 'Preencha todos os campos!', {httpOnly: true, maxAge: 10000})
        return res.redirect('/criar-questao')
    }

    const questionExist = await prisma.question.findFirst({where: {
        content: question.content
    }})
    if(questionExist){
        res.cookie('errors', 'Questão já existente.', {httpOnly: true, maxAge: 10000})
        return res.redirect('/criar-questao')
    }


const correctAnswer = Number(question.correct_alternative)
  await prisma.question.create({
        data: {
            content: question.content,
            difficult: question.difficult,
            discipline: question.discipline,
            correct_alternative: correctAnswer,
            question_command: question.question_command,
            title: question.title,
            alternatives: question.alternatives,
            creatorId: question.creatorId
        }
    })
        res.cookie('success', 'Questão criada com sucesso!', {httpOnly: true, maxAge: 10000})
        return res.redirect('/criar-questao')

    }catch(err){
        console.log(err)
        res.cookie('errors', 'Erro ao criar questão.', {httpOnly: true, maxAge: 10000})
        return res.redirect('/criar-questao')
    }
}



export {renderCreatequestion, Createquestion}