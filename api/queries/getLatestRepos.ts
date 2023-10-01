import axios from "axios";
import UserModelInterface from "@/interfaces/UserModelInterface"
import {EXTERNAL_URLS} from "@/configs/constants";

export default async function getLatestRepos(data: UserModelInterface, token: string): Promise<GitHubRepositoryInterface[]> {
    const username = data.githubUsername;
    const res = await axios.get(
        `${EXTERNAL_URLS.GITHUB}/search/repositories?q=user:${username}+sort:author-date-desc`,
        {
            headers: {
                Authorization: `token ${token}`,
            },
        }
    );
    let repos = res.data.items;
    // console.log("LATEST 6 repos", latestSixRepos);
    return repos.splice(0, 6);

}

