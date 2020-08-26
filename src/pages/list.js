import Link from 'next/link';
import { Fragment } from 'react';

export default function List({data}) {
    return(
        <Fragment>
            {data.map((e,index) =>(
                <div key={index}>
                    <Link as={`/${e.vehicle}/${e.ownerName}`} href="/[parent]/[child]">
                        <a>Navigate to {e.title}`s {e.v}</a>
                    </Link>
                </div>
            ))}
        </Fragment>
    );
}

List.getInitialProps = async() => {
    const res = await fetch('http://localhost:4001/vehicles');
    const data = await res.json();
    return {data: data}
}