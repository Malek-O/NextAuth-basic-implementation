import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function page() {

    const session = await getServerSession()
    console.log(session);
    if (!session || !session.user) {
        redirect("/api/auth/signin")
    }

    return (
        <div>
            This is protected route
        </div>
    )
}
