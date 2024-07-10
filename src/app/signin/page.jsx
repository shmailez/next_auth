'use client'
import { GoogleButton } from "@/components/GooglrButton";
import SignInForm from "@/components/SignInForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"

export default  function Signin() {

    const session = useSession()
    console.log(session)

    const router = useRouter()
    console.log(router)

    console.log(session?.status)

    // if (session?.status === 'authenticated') router.push('/profile')
    

    return <>
    <div className="singpage">
        <h1>Sign In</h1>
        <GoogleButton/>
        <p>OR</p>
        <SignInForm/>
    </div>
        
    </>
}