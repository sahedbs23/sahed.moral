"use client"

import "@/styles/globals.scss"
import {AppProps} from "next/app";
// import Script from "next/script";

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <>
            {/*<Script*/}
            {/*    strategy="lazyOnload"*/}
            {/*    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}*/}
            {/*/>*/}

            {/*<Script strategy="lazyOnload" id="ga-script">*/}
            {/*    {`*/}
            {/*        window.dataLayer = window.dataLayer || [];*/}
            {/*        function gtag(){dataLayer.push(arguments);}*/}
            {/*        gtag('js', new Date());*/}
            {/*        gtag('config', '${process.env.GOOGLE_ANALYTICS}', {*/}
            {/*        page_path: window.location.pathname,*/}
            {/*        });*/}
            {/*    `}*/}
            {/*</Script>*/}
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
