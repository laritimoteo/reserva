import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/Upload'
import  SessionController  from './controllers/SessionController'

// const.post('/sessions', SessionController.store)
const routes = new Router()

routes.post('/sessions', SessionController.store)


export default routes