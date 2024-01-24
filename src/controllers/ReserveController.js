import Reserve from '../models/Reserve'
import User from '../models/User'
import House from '../models/House'

class ReserveController {
    async store(req, res){
        const { user_id } = req.headers
        const { house_id } = req.params
        const { date } = req.body

        //Verificação para identificar casa existente e disponibilidade(House)
        const house = await House.findById(house_id)
        console.log(house.status)
        if(!house){
            return res.status(400).json({ err: "Essa casa não existe" })
        }

        if(house.status === false){
            return res.status(400).json({ err: "Solicitação indisponivel" })
        }
        
        //Verificação para não permitir reserva da propria pesse que cadastrou
        const user = await User.findById(user_id)
        if(String(user._id) === String(house.user)){
            return res.status(401).json({ err: "Reserva não permitida" })
        }

        const reserve = await Reserve.create({
            user: user_id,
            house: house_id,
            date
        })

        //passar mais informações para ser consumido pelo front end
        const reserveHouser = await reserve.populate('house')
        const reserveUser = await reserveHouser.populate('user')

        return res.status(201).json(reserveUser)
    }

    async index(req, res){
        const { user_id } = req.headers

        const reserves = await Reserve.find({ user: user_id }).populate('house')

        return res.status(200).json(reserves)
    }

    async destroy(req, res){
        const { reserve_id } = req.body

        await Reserve.findByIdAndDelete({ _id: reserve_id })
        
        return res.send()
    }
}

export default new ReserveController()