import Link from "next/link";
import { ArrowBigLeft } from 'lucide-react'

export default function Return() {
    return (
        <button className="flex hover:text-amber-800 dark:hover:text-orange-400 transition-all duration-300 ease-in-out  ">
            <Link href='/'>
                <ArrowBigLeft className="size-7 md:size-10"/> 
            </Link>
        </button>
    )
}