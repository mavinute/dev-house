import * as Yup from 'yup'

import User from '../models/User'

/**
 * metodos: index, show, update, store, destroy
 * index - lista todos os sessions
 * show - exibe unica session
 * update - atualiza session
 * store - cria session
 * destroy - deleta session
 */

class SessionController{
    async store(req, res){
        const schema = Yup.object().shape({
            email: Yup.string().email().required()
        })
        
        const { email } = req.body

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({ err: "Falha na validação" })
        }

        let user = await User.findOne({ email })

        if(!user){
            user = await User.create({ email })
        }

        return res.status(201).json({ user })
    }
}

export default new SessionController()