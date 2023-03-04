import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.URI_MONGO)
    console.log("concexion ok 😎")
} catch (error) {
    console.log("error conexión mongoDB: "+error)
}