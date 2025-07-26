import fs from 'fs';
import * as path from 'path';
import { PodcastModel } from '../models/podcast-model';

const dataPath = path.join(__dirname, './podcasts.json');

export const repositoryData = async (podcastEditor?: string): Promise<PodcastModel[]> => {
    const rawData = fs.readFileSync(dataPath, 'utf-8');

    let jsonFile = JSON.parse(rawData);

    if(podcastEditor) {
        jsonFile = jsonFile.filter((podcast: PodcastModel) => {
            return podcast.podcastEditor === podcastEditor;
        })
    }

    return jsonFile;
}
