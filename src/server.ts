import * as http from 'http';
import { getFilteredEpisodes, getListEpisodes } from './controllers/podcastsController';
import { Routes } from './routes/routes';

const server = http.createServer(async (req:http.IncomingMessage, res:http.ServerResponse) => {
    const [baseUrl, query] = req.url?.split('?') ?? ['', ''];

    if(req.method === 'GET' && baseUrl === Routes.LIST) {
        await getListEpisodes(req, res); 
    } else if(req.method === 'GET' && baseUrl === Routes.FILTER) {
        await getFilteredEpisodes(req, res);
    }
})

const port = process.env.PORT;

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});