import Link from 'next/link'
const people = [
    {v: 'car', name: 'mufrad'},
    {v: 'bike', name: 'mabni'},
    {v: 'airplane', name: 'mufrad mabni'}
]
export default function Details(){
    return <div>
        <h3>Dynamic Routing System</h3>
        {people.map(e => (
            <div>
                <Link id={e.name} as={`/${e.v}/${e.name}`} href="/[parent]/[child]">
                    <a>Navigate to {e.name}`s {e.v}</a>
                </Link>
            </div>
        ))}
        </div>
}