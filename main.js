const app = require("./src/helpers/server.config");

//routes
const hello = require('./src/routes/hello');
app.use('/', hello);


app.listen(process.env.PORT || 8000, () => {
  console.log(`Servidor Rodando`);
});
