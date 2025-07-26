import { IncomingMessage } from "node:http";
import { repositoryData } from "../repositories/repository"


export const filterEpisodes = async (podcastEditor: string | undefined) => {
    const reqUrl: string = podcastEditor || '';
     
    const urlParams: URL = new URL(reqUrl, `http://localhost:3535${podcastEditor}`);
    const episodeEditor: string = urlParams.searchParams.get('episode') || '';

    const data = await repositoryData(episodeEditor);

    return data;
}

