import { ENVIRONMENT } from "@/constants/enviroment";
import { IUploadVideo } from "@/constants/types";
import axios from "axios";

export async function uploadVideo({ title, description, url, category, sector, tags, author }: IUploadVideo) {
    const { data } = await axios.post(ENVIRONMENT.BASE_API + "/api/v1/upload", {
        title: title,
        description: description,
        url: url,
        category: category,
        sector: sector,
        tags: tags,
        author: author,
    });
    return data;
}