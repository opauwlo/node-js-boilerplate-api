const app = require("./helpers/server.config");


app.listen(process.env.PORT || 8000, () => {
  console.log(`Servidor Rodando`);
});