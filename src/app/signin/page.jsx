import { GoogleButton } from "@/components/GooglrButton";
import SignInForm from "@/components/SignInForm";

export default  function Signin() {
    return <>
    <div className="singpage">
        <h1>Sign In</h1>
        <GoogleButton/>
        <p>OR</p>
        <SignInForm/>
    </div>
        
    </>
}