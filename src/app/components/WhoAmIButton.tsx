'use client'
import { useState } from "react"
export default function WhoAmIButton({ whoAmIButton }: {
    whoAmIButton: () => Promise<string>
}) {

    const [name, setName] = useState<string>();

    return (
        <div>
            <button onClick={async () => {
                setName(await whoAmIButton())
            }}>
                Who Am I ?
            </button>
            {name && <div>You are {name}</div>}
        </div >
    )
}
