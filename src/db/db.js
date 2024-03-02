import mongoose from "mongoose";

const connectDB = async (req, res) => {

    try {
        
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);

        console.log(` mongodb database connecteed successfully ${connectionInstance.connection.host}`);
        
    } catch (error) {

        console.log(' error while connecting database '+ error);
        
    }
    

}


export {connectDB} 