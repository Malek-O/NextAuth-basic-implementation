import { getServerSession } from 'next-auth'
import React from 'react'
import WhoAmIButton from '../components/WhoAmIButton'

export default async function page() {

    const whoAmI = async () => {
        "use server"
        const session = await getServerSession()
        return session?.user?.name || "Not logged in"
    }

    return (
        <div>
            <WhoAmIButton whoAmIButton={whoAmI} />
        </div>
    )
}
