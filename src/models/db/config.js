const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config();
// Configurando o mongoose
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true , 
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>{
    console.log("MongoDB Conectado...");
}).catch((err)=>{
    console.log("Houve um erro: " + err);
});
