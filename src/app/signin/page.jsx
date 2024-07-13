import { GoogleButton } from "@/components/GooglrButton";
import SignInForm from "@/components/SignInForm";
import { Suspense } from "react";

export default  function Signin() {
    return <>
        <Suspense fallback={<Loading />}>
            <div className="singpage">
                <h1>Sign In</h1>
                <GoogleButton/>
                <p>OR</p>
                <SignInForm/>
            </div>
        </Suspense>
    </>
}

function Loading() {
    return <h2>🌀 Loading...</h2>;
  }