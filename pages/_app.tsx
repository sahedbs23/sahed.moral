"use client"

import "@/styles/globals.scss"
import {AppProps} from "next/app";

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
