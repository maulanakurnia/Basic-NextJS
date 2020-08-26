import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Person({ownersList}){
    const [owners, setOwners] = useState([]);
    const router = useRouter();
    useEffect(() => {
        async function loadData(){
            const res = await fetch(`http://localhost:4001/vehicles?ownerName=${router.query.person}&vehicle=${router.query.vehicle}`);
            const data = await res.json();
            setOwners(data);
        }
        if(ownersList.length == 0) {
            loadData();
        }
    }, [])
    if(!owners[0]){
        return <div>loading...</div>
    }
    return <pre>{ownersList[0]?.details}</pre>
}

Person.getInitialProps = async (ctx) => {
    if(!ctx.req) {
        return { ownersList: [] };
    }
    const {query} = ctx; 
    const res = await fetch(`http://localhost:4001/vehicles?ownerName=${query.person}&vehicle=${query.vehicle}`);
    const data = await res.json();
    return {ownersList: data}
}