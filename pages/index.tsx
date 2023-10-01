import React from "react";
import ContainerBlock from "@/components/shared/ContainerBlock";
import FavouriteProjects from "@/components/FavouriteProjects";
import LatestCode from "@/components/LatestCode";
import Hero from "@/components/shared/Hero";
import getLatestRepos from "@/api/queries/getLatestRepos";
import {USERDATA} from "@/dataSource/data";
import {GetServerSideProps} from "next";

interface HomePageProps {
    repositories: GitHubRepositoryInterface[]
}

const Home: React.FC<HomePageProps> = ({repositories}) => (
    <ContainerBlock
        title="Sahed Moral - Developer, Writer, Creator"
        description="This is a template built specifically for my blog - Creating a developer portfolio that gets you a job."
    >
        <Hero/>
        <FavouriteProjects/>
        <LatestCode repositories={repositories}/>
    </ContainerBlock>
)

export default Home;

export const getServerSideProps: GetServerSideProps<{ repositories: GitHubRepositoryInterface[] }> = async () => {
    let token = process.env.GITHUB_AUTH_TOKEN || "";

    const repositories: GitHubRepositoryInterface[] = await getLatestRepos(USERDATA, token);

    return {
        props: {
            repositories,
        },
    };
};
