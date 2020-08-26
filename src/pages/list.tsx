import Link from 'next/link';
import { Fragment } from 'react';
import { VehiclePerson } from '../../api/VehiclePerson';

export interface ListProps {
    ownersList: VehiclePerson[] | undefined;
}

export default function List({ownersList}: ListProps) {
    return(
        <Fragment>
            {ownersList?.map((e,index) =>(
                <div key={index}>
                    <Link as={`/${e.vehicle}/${e.ownerName}`} href="/[parent]/[child]">
                        <a>Navigate to {e.ownerName}`s {e.vehicle}</a>
                    </Link>
                </div>
            ))}
        </Fragment>
    );
}

List.getInitialProps = async() => {
    const res = await fetch('http://localhost:4001/vehicles');
    const data: VehiclePerson | undefined = await res.json();
    return {ownersList: data}
}