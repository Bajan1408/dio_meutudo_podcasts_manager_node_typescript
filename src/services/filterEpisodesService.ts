import { repositoryData } from "../repositories/repository"


const filterEpisodes = async (podcastEditor: string) => {
    const data = await repositoryData(podcastEditor);

    return data;
}