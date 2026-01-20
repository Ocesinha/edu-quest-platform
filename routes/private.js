import express from 'express'
import { renderHome } from '../controllers/private/homeController.js'
import { Logout } from '../controllers/private/logoutController.js'
import { Createquestion, renderCreatequestion } from '../controllers/private/createQuestion.js'
import { genQuestions, renderQuestions, getQuestions } from '../controllers/private/questionsController.js'
export const privateRouter = express.Router()

privateRouter.get('/home', renderHome)
privateRouter.get('/questoes', renderQuestions)
privateRouter.get('/criar-questao', renderCreatequestion)
privateRouter.get('/materia/:nome', genQuestions)

privateRouter.post('/logout', Logout )
privateRouter.post('/criar-questao', Createquestion)
privateRouter.post('/api/materia', getQuestions)

