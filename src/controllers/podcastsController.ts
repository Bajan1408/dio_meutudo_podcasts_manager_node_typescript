import { IncomingMessage, ServerResponse } from "node:http";
import { listEpisodes } from "../services/listEpisodesService";
import { filterEpisodes } from "../services/filterEpisodesService";

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content = await listEpisodes();
    
    res.writeHead(content.statusCode, { "content-type": "application/json" });

    res.end(
        JSON.stringify(content.podcastResponse)
    )
}

export const getFilteredEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content = await filterEpisodes(req.url);

    res.writeHead(content.statusCode, { "content-type": "application/json" });

    res.end(JSON.stringify(content.podcastResponse));
}