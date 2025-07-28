import { PodcastResponseModel } from "../models/podcast-response-model";
import { repositoryData } from "../repositories/repository";
import { StatusCode } from "../utils/status-codes";

export const listEpisodes = async (): Promise<PodcastResponseModel> => {
    const data = await repositoryData();

    const response: PodcastResponseModel = {
            statusCode: 0,
            podcastResponse: [] 
        }

    if(data.length !== 0) {
        response.statusCode = StatusCode.OK;
    } else {
        response.statusCode = StatusCode.NO_CONTENT;
    }

    response.podcastResponse = data;
    
    return response;
}