import Head from "next/head";
import Header from "../Header"

type DefaultLayout = {
    children: React.ReactNode
}

export default function Layout({children}: DefaultLayout) {
    return (
        <>
            <Head>
                <title>Notes App</title>
            </Head>
            <Header></Header>
            <main className="max-w-[800px] border-x-[1px] h-[calc(100vh-75px)] mx-auto pt-5">
                {children}
            </main>
        </>
    )
}