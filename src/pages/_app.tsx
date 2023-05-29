import { AppProps } from "next/app";
import Layout from "@/components/layouts/Layout";
import "../styles/global.css"

function App({Component, pageProps}: AppProps) {
    return (
        <Layout>
            <Component {...pageProps}></Component>
        </Layout>
    )
}

export default App;