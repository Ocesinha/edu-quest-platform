import express from 'express'
import cors from 'cors'
import { configDotenv } from 'dotenv'
import { publicRouter } from './routes/public.js'
import cookieParser from 'cookie-parser'
import csrf from 'csurf'
import { Notification_MID } from './middleware/notification.js'
import { csrf_Protection } from './middleware/csrf.js'
import { privateRouter } from './routes/private.js'
import { auth } from './middleware/auth.js'

configDotenv()

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./frontend'))

app.set('view engine', 'ejs')
app.set('views', './frontend/views')

const csrfProtection = csrf({
  cookie: {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production'
  }
})
app.use(csrf_Protection)



app.use(Notification_MID)
app.use(publicRouter)
app.use(auth,privateRouter)

app.listen(port, () => {
    console.log(`SERVIDOR RODANDO EM: http://localhost:${port}`)
})