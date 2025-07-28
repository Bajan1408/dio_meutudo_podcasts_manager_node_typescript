import { repositoryData } from "../repositories/repository"
import { PodcastResponseModel } from "../models/podcast-response-model";
import { StatusCode } from "../utils/status-codes";


export const filterEpisodes = async (podcastEditor: string | undefined): Promise<PodcastResponseModel> => {
    const reqUrl: string = podcastEditor || '';
     
    const urlParams: URL = new URL(reqUrl, `http://localhost:3535${podcastEditor}`);
    const episodeEditor: string = urlParams.searchParams.get('episode') || '';

    const response: PodcastResponseModel = {
        statusCode: 0,
        podcastResponse: [] 
    }

    const data = await repositoryData(episodeEditor);

    if(data.length === 0) {
        response.statusCode = StatusCode.NO_CONTENT;
        
    } else {
        response.statusCode = StatusCode.OK;
    }

    response.podcastResponse = data;

    return response;
}

