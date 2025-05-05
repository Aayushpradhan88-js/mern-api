import express from 'express'
import { router } from './userRoutes.js'
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json({limit: '16kb'}))

app.use('/api/v2/users', router)

export {app}