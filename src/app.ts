import * as http from 'http';
import { getFilteredEpisodes, getListEpisodes } from './controllers/podcastsController';
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';

export const app = async (req:http.IncomingMessage, res:http.ServerResponse) => {
    const [baseUrl, query] = req.url?.split('?') ?? ['', ''];

    if(req.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(req, res); 
    } else if(req.method === HttpMethod.GET && baseUrl === Routes.FILTER) {
        await getFilteredEpisodes(req, res);
    }
}