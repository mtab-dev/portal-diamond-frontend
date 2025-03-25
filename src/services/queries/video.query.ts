import { ENVIRONMENT } from "@/constants/enviroment";
import {  IUploadVideo, IVideo } from "@/constants/types";
import axios from "axios";

export async function uploadVideo({ title, description, url, category, sector, tag, author }: IUploadVideo) {
    const { data } = await axios.post(ENVIRONMENT.BASE_API + "/api/v1/upload", {
        title: title,
        description: description,
        url: url,
        category: category,
        sector: sector,
        tag: tag,
        author: author,
    });
    return data;
}

export async function getAllVideos(): Promise<IVideo[]> {
    const { data } = await axios.get(ENVIRONMENT.BASE_API + "/api/v1/videos");
    console.log(data)

    return data.videos
}