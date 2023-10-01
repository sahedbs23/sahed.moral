"use client"

import "@/styles/globals.css"
import {ThemeProvider} from "next-themes";
import {AppProps} from "next/app";

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <ThemeProvider defaultTheme="light" attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
