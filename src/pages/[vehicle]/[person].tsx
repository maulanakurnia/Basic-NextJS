import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { VehiclePerson } from "../../../api/VehiclePerson";
import { NextPageContext } from "next";

export interface PersonProps {
    ownersList?: VehiclePerson[];
}

export default function Person({ownersList}: PersonProps){
    const [owners, setOwners] = useState(ownersList);
    const router = useRouter();
    useEffect(() => {
        async function loadData(){
            const res = await fetch(`http://localhost:4001/vehicles?ownerName=${router.query.person}&vehicle=${router.query.vehicle}`);
            const data: VehiclePerson[] | undefined = await res.json();
            setOwners(data);
        }
        if(ownersList?.length == 0) {
            loadData();
        }
    }, [])
    if(!owners?.[0]){
        return <div>loading...</div>
    }
    return <pre>{owners[0]?.details}</pre>
}

interface InitialProps extends NextPageContext {
    query: {
        person: string;
        vehicle: string;
    }
}

Person.getInitialProps = async ({ query, req }: InitialProps) => {
    if(!req) {
        return { ownersList: [] };
    }
    const res = await fetch(`http://localhost:4001/vehicles?ownerName=${query.person}&vehicle=${query.vehicle}`);
    const data: VehiclePerson[] | undefined = await res.json();
    return {ownersList: data}
}