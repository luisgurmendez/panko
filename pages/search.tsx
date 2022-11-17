import { useRouter } from "next/router";
import { useEffect } from "react";
import PageContainer from "../components/PageContainer";
import SearchedEvent from "../components/SearchedEvent";

const Search = (props: any) => {
    const { events } = props;
    const router = useRouter()
    const { q } = router.query

    useEffect(() => {

    }, [])

    return (
        <PageContainer>
            <div className="h-full flex-1">
                <span className="break-all w-full flex items-center flex-row justify-center flex-wrap">
                    <h3 className="text-4xl mr-2">Resultados para:</h3><h1 className="text-4xl font-bold"> {q}</h1>
                </span>
                <div className="justify-center mt-16 mb-6 flex flex-row flex-wrap space-y-6 space-x-1 md:space-x-6">
                    {events.map((e: any, i: number) => <SearchedEvent key={i} event={e} />)}
                </div>
            </div>
        </PageContainer>
    )
}


export default Search;

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/events');
    const data = await res.json();
    return { props: data }
}
