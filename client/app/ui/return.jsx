import Link from "next/link";
import { ArrowBigLeft } from 'lucide-react'

export default function Return() {
    return (
        <button className="flex hover:text-orange-400">
            <Link href='/'>
                <ArrowBigLeft className="size-7 md:size-10"/> 
            </Link>
        </button>
    )
}