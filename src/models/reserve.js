import { Schema, model } from 'mongoose'

const ReserveSchema = new Schema ({
   date: String,
   user: {
    type:Schema.Type.ObjectId.ObjectId,
    ref: 'User'
   },

   house: {
    type:Schema.Type.ObjectId.ObjectId,
    ref: 'House'
   }

})

export default model('Reserve', ReserveSchema)