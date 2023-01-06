import { useRouter } from 'next/router';

const Doc = () => {
    const router = useRouter();
    const { params = [] } = router.query;
    console.log(params);
    if(params.length === 1) return <h1>Feature Page {params[0]}</h1>;
    else if(params.length === 2) return <h1>Feature page {params[0]} Concept {params[1]}</h1>;
    return <h1>Docs Page</h1>;
}

export default Doc;