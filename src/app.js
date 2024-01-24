import express from "express"
import path from "path"
//import { MongoClient } from "mongodb"
import mongoose from "mongoose"
import cors from "cors"

import { router } from "./routes"

class App{
    constructor(){
        this.server = express()

        mongoose.connect("credencial de acesso")

        this.middleware()
        this.routes()
    }

    middleware(){
        this.server.use(cors())

        this.server.use(
            '/files',
            express.static(path.resolve(__dirname, '..', 'uploads'))
        )

        this.server.use(express.json())
    }

    routes(){

        this.server.use(router)
    }
}

export default new App().server
