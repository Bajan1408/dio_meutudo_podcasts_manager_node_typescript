import { IncomingMessage, ServerResponse } from "node:http";
import { listEpisodes } from "../services/listEpisodesService";
import { PodcastModel } from "../models/podcast-model";
import { filterEpisodes } from "../services/filterEpisodesService";
import { URL, URLSearchParams } from 'url'; 

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "content-type": "application/json" });

    const content = await listEpisodes();

    res.end(
        JSON.stringify(content)
    )
}

export const getFilteredEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    
    res.writeHead(200, { "content-type": "application/json" });

    const content = await filterEpisodes(req.url);

    res.end(JSON.stringify(content));
}