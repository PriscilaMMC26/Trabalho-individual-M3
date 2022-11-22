const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(jsonServer.rewriter({
  "/todas_as_livrarias": "/livrarias",
  "/adicionar_livraria": "/livrarias",
  "/editar_livraria/:id": "/livrarias/:id",
  "/deletar_livraria/:id": "/livrarias/:id"
  
}))
server.use(router);
server.listen(port, () => { console.log(`JSON Server está rodando na porta ${port}`) })
