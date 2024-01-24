import * as Yup from 'yup'

import House from "../models/House"
import User from "../models/User"

class HouseController{
    async index(req, res){
        const { status } = req.query

        const house = await House.find({status})

        return res.status(200).json(house)
    }
    
    async store(req, res){
        //Validação com Yup
        const schema = Yup.object().shape({
            description: Yup.string().required(),
            price: Yup.number().required(),
            location: Yup.string().required(),
            status: Yup.boolean().required()
        })
        
        const { filename } = req.file
        const { description, price, location, status } = req.body
        const { user_id } = req.headers

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({ err: "Falha na validação" })
        }

        const house = await House.create({
            user: user_id,
            thumbnail: filename,
            description,
            price,
            location,
            status
        })

        return res.status(201).json(house)
    }

    async update(req, res){
        const { filename } = req.file
        const { house_id } = req.params
        const { description, price, location, status } = req.body
        const { user_id } = req.headers

        const house = await House.findById(house_id)
        const user = await User.findById(user_id)
        //console.log(String(user._id), String(house.user))

        if(String(user._id) !== String(house.user)){
            return res.status(401).json({ err: "Não autorizado" })
        }

        await House.updateOne({ _id: house_id }, {
            user: user_id,
            thumbnail: filename,
            description, 
            price, 
            location, 
            status
        })

        return res.status(200).json({mess: "Atualisado com sucesso"})
    }

    async destroy(req, res){
        const { house_id } = req.body
        const { user_id } = req.headers
        //console.log(house_id, user_id)

        const house = await House.findById(house_id)
        const user = await User.findById(user_id)
        console.log(String(user._id), String(house.user))

        if(String(user._id) !== String(house.user)){
            return res.status(401).json({ err: "Não autorizado" })
        }

        await House.findByIdAndDelete({ _id: house_id })

        return res.status(200).json({mess: "Deletado com sucesso"})
    }
}

export default new HouseController()