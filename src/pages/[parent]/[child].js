import {useRouter} from 'next/router';

export default function Child(){
    const router = useRouter();
    console.log(router.query)
    return <h3>{router.query.child} on {router.query.parent}</h3>
}