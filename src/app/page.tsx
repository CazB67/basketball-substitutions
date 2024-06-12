// mark as client component
"use client";

// importing necessary functions
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";
import basketballImage from "./assets/ballandhoop.jpg"
import TeamList from "./components/TeamList";

export default function Home() {
  // extracting data from usesession as session
  const { data: session } = useSession()

  // checking if sessions exists
  if (session) {
    // rendering components for logged in users
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="w-20 h-20 relative mb-4">
        <Image
          src={session.user?.image as string}
          fill
          alt=""
          className="object-cover rounded-full"
        />
        </div>
        <p className="text-2xl mb-2">Welcome <span className="font-bold">{session.user?.name}</span>. Signed In As</p>
        <p className="font-bold mb-4">{session.user?.email}</p>
        <TeamList/>
        <button className="bg-green-50 hover:bg-green-100 py-2 px-6 rounded-md" onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }

  // rendering components for not logged in users
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4 py-4">
      <h1 className="text-2xl font-bold"> Basketball Substitutions</h1>
      <Image className="rounded-md" width="200" src={basketballImage} alt={"Basketball and hoop"} />
      <div className="w-full h-screen flex flex-col justify-start items-center gap-4">
        <button className="bg-blue-200 hover:bg-blue-300 py-2 px-6 rounded-md" onClick={() => signIn('google')}>Sign in with Google</button>
        <button className="bg-slate-200 hover:bg-slate-300 py-2 px-6 rounded-md" onClick={() => signIn('github')}>Sign in with Github</button>
        </div>
    </div>
  )

}