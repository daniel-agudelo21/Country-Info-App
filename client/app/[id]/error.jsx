'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'
import Return from "../ui/return";

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Return />
            <div className="bg-orange-100 text-red-600 p-4 rounded-md mt-5">
                <h2 className="text-2xl font-bold">No avaliable information</h2>
                <p>This country does not have information</p>
            </div>
        </div>
    );
}