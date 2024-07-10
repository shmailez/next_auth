'use client'

import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"

export const GoogleButton = () => {
    const searchParams = useSearchParams()
    console.log(searchParams)
    const callbackUrl = searchParams.get("callbackUrl") || '/profile'

    return <>
        <button className="googlebutton"
            onClick={() => signIn('google', {callbackUrl})}
        >Sign In with Google</button>
    </>
    // const callbackUrl = searchParams.get("callbackUrl") || "/profile";

    // return (
    //   <button onClick={() => signIn("google", { callbackUrl })}>
    //     Sign in with Google
    //   </button>
    // );
}