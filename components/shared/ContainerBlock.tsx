import React from "react";
import Head from "next/head";
import {useRouter} from "next/router";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export type NodeCollection = React.ReactNode | React.ReactNode[];
export interface ContainerBlockInterface {
    children: NodeCollection,
    title?: string,
    description?: string,
    date?: string
}

const ContainerBlock: React.FC<ContainerBlockInterface> = ({children, ...customMeta}) => {
    const router = useRouter();

    const meta = {
        title: "Sahed Moral - Frontend Engineer, Backend Engineer, Full Stack Engineer",
        description: `I've been developing websites for 8 years straight. Get in touch with me to know more.`,
        image: "/avatar.png",
        type: "website",
        ...customMeta,
    };
    return (
        <div>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index"/>
                <meta content={meta.description} name="description"/>
                <meta
                    property="og:url"
                    content={`https://sahed.vercel.app/${router.asPath}`}
                />
                <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32"/>
                <link
                    rel="canonical"
                    href={`https://sahed.vercel.app${router.asPath}`}
                />
                <meta property="og:type" content={meta.type}/>
                <meta property="og:site_name" content="Sahed Moral"/>
                <meta property="og:description" content={meta.description}/>
                <meta property="og:title" content={meta.title}/>
                <meta property="og:image" content={meta.image}/>
                {/*<meta name="twitter:card" content="summary_large_image"/>*/}
                {/*<meta name="twitter:site" content="@mannupaaji"/>*/}
                {/*<meta name="twitter:title" content={meta.title}/>*/}
                {/*<meta name="twitter:description" content={meta.description}/>*/}
                {/*<meta name="twitter:image" content={meta.image}/>*/}
                {meta?.date && (
                    <meta property="article:published_time" content={meta.date}/>
                )}
            </Head>
            <main className="dark:bg-white-800 w-full">
                <Navbar/>
                <div className="my-16">
                    {children}
                </div>
                {/*<Footer/>*/}
            </main>
        </div>
    );
}

export default ContainerBlock;
