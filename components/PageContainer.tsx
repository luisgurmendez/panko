import dynamic from "next/dynamic"
import Head from "next/head"
import Footer from "./Footer"

const DynamicNavbar = dynamic(() => import('./Navbar'), { ssr: false })

const PageContainer: React.FC<any> = ({ children }) => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <Head>
                <title>Vibra</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DynamicNavbar />
            <main className="flex w-full h-full flex-1 flex-col mt-20 text-center scroll-smooth overflow-y-auto">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default PageContainer;