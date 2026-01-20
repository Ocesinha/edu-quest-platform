import express from 'express'
import { renderRegister, handleRegister } from '../controllers/public/registerController.js'
import { renderLogin, loginController } from '../controllers/public/loginController.js'

const publicRouter = express.Router()

publicRouter.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' })
})

publicRouter.get('/register', renderRegister)
publicRouter.get('/login', renderLogin)

publicRouter.post('/register', handleRegister)
publicRouter.post('/login', loginController)


export {publicRouter}