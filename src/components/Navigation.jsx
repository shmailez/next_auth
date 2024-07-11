'use client'
import { signOut, useSession } from 'next-auth/react'
import Link from "next/link"

export const Navigation = () => {

    const session = useSession()

    return <>
        <nav>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>about</Link>
                </li>
                <li>
                    <Link href='/blog'>blog</Link>
                </li>
                {session?.data && (
                    <li>
                        <Link href='/profile'>Profile</Link>
                    </li>
                )}
                {session?.data ? (<li>
                        <Link href='#' onClick={() => signOut({callbackUrl: "/"})}>Sign Out</Link>
                    </li>) : (<li>
                        <Link href='/api/auth/signin'>Sign In</Link>
                    </li>)}
            </ul>
        </nav>
    </>
}