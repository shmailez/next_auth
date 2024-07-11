export default function About() {
    if (typeof window == "undefined") {
        console.log("Application is on server side");
    } else {
        alert("Application is on client side");
    }

    return <>
    <h1>About
    </h1>
    </>
}