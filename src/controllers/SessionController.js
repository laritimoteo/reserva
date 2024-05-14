/*  
     index (listAll): listagem de sessoes 
     store (add): criar uma sessao
     show (list): quando queremos listar um UNICA sessão 
     update: quando queremos alterar alguma sessao
     destroy (delete): quando queremos deletar uma sessão

*/

import User from '../models/User'
import * as Yup from 'yup'

class SessionController {
    async store (req,res) {
        const shema = Yup.object().shape({
            email:Yup.string().email().required(),
        })
        const { email } = req.body
        if(!(await Schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Falha na Validação'})
        }
        
let user = await User.findOne({ email})
if(!user){
     user = await User.create({ email})
}

return res. json(user)

    }
}

export default new SessionController()