import * as http from 'http';

const server = http.createServer((req:http.IncomingMessage, res:http.ServerResponse) => {

})

const port = '3005';

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});