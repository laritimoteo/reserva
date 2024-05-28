import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import  path  from 'path'
import routes from './router'
import dotenv from 'dotenv'

dotenv.config()
class app {
    constructor() {
        this.server = express()
        mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        this.middlewares()
        this.routers()

    }

middlewares () {
    this.server.use(cors())
    this.server.use(
        '/files',
        express.static(path.resolve(__dirname, '..','uploads'))
    )
    this.server.use(express.json())
    }
    routers() {
        this.server.use(routes)

    }
  
}
export default new app().server