import axios from "axios";
import UserModelInterface from "@/app/interfaces/UserModelInterface"
import {EXTERNAL_URLS} from "@/app/configs/constants";

const getLatestRepos = async (data: UserModelInterface, token: string) => {
    try {
        const username = data.githubUsername;
        if (token) {
            const res = await axios.get(
                `${EXTERNAL_URLS.GITHUB}/search/repositories?q=user:${username}+sort:author-date-asc`,
                {
                    headers: {
                        Authorization: `token ${token}`,
                    },
                }
            );
            let repos = res.data.items;
            // console.log("LATEST 6 repos", latestSixRepos);
            return repos.splice(0, 6);
        } else {
            const res = await axios.get(`${EXTERNAL_URLS.GITHUB}/search/repositories?q=user:${username}+sort:author-date-asc`);
            let repos = res.data.items;
            return repos.splice(0, 6);
        }
    } catch (err) {
        console.error(err);
    }
};

export default getLatestRepos;
