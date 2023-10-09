import mongoose from "mongoose";

export const conntDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://sibas:DBo4PV6cQSqNKdG3@cluster0.pkmtmgl.mongodb.net/?retryWrites=true&w=majority')
        console.log('connet sever')
    } catch (error) {
        console.log(error)
    }
    
}