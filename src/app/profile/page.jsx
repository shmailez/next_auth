import { authCoufig } from "@/configs/auth"
import { getServerSession } from "next-auth"

export default async function Profile() {
    const session = await getServerSession(authCoufig)
    return <>
        <h1>Profile of {session?.user?.name}</h1>
        {session?.user?.image && (<img src={session.user.image} alt='avatar'/>)}
    </>
}