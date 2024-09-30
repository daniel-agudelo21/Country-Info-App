import Link from "next/link"

export default function Card({ id, name }) {

    return (

        <article className="hover:text-orange-400 transition-all duration-300 ease-in-out border hover:border-orange-400 hover:text-primary-foreground font-semibold p-2 rounded-md" >
            <Link href={`/${id}`}>
                <p>{name}</p>
            </Link>
        </article>


    )
}