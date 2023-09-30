import React from "react";
import ContainerBlock from "@/app/components/shared/ContainerBlock";
import FavouriteProjects from "@/app/components/FavouriteProjects";
import LatestCode from "@/app/components/LatestCode";
import Hero from "@/app/components/shared/Hero";
import getLatestRepos from "@/app/api/queries/getLatestRepos";
import userData from "@/app/dataSource/data";

const Home: React.FC<GitHubRepositoryInterface[]> = repositories => (
    <ContainerBlock
        title="Manu Arora - Developer, Writer, Creator"
        description="This is a template built specifically for my blog - Creating a developer portfolio that gets you a job."
    >
        <Hero/>
        <FavouriteProjects/>
        <LatestCode {...repositories} />
    </ContainerBlock>
)

export default Home;

export const getServerSideProps = async () => {
    let token = process.env.GITHUB_AUTH_TOKEN || "";

    const repositories = await getLatestRepos(userData, token);

    return {
        props: {
            repositories,
        },
    };
};
