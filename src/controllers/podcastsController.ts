import { IncomingMessage, ServerResponse } from "node:http";
import { listEpisodes } from "../services/listEpisodesService";

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "content-type": "application/json" });

    const content = await listEpisodes();

    res.end(
        JSON.stringify(content)
    )
}