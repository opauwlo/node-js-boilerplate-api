const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
// Configurando o mongoose
mongoose.Promise = global.Promise;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log('Failed to connect to MongoDB', err);
  }
};
connectDB();
