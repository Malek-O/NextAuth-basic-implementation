import { getServerSession } from 'next-auth'


export default async function Home() {

  const session = await getServerSession()

  return (
    <main className="">
      {session ? session.user?.name : <h1>home</h1>}
    </main>
  )
}
