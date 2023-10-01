import React from "react";

interface GitHubRepository {
    repository: GitHubRepositoryInterface
}

const GithubRepoCard:React.FC<GitHubRepository> = ({repository}) => {
    return (
        <div className="github-repo">
            <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
                {repository.name}
            </h1>
            <p className="text-base font-normal my-4 text-gray-500">
                {repository.description}
            </p>
            <a
                href={repository.clone_url}
                className="font-semibold group flex flex-row space-x-2 w-full items-center"
            >
                <p>View Repository </p>
                <div className="transform  group-hover:translate-x-2 transition duration-300">
                    &rarr;
                </div>
            </a>
        </div>
    );
};

export default GithubRepoCard;