import { repositoryData } from "../repositories/repository";

export const listEpisodes = async () => {
    const data = await repositoryData();

    return data;
}