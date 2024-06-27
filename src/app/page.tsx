"use client";

// importing necessary functions
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image"; // Correct path
import {useState } from "react";
import TeamList from "./components/TeamList";
import Teams from "./components/Teams";
import BackArrowIcon from "@components/Icons/BackArrowIcon/BackArrowIcon";
import basketballImage from "./assets/kids-playing.png";
import lightningHoopsImage from "@assets/lightning-hoops.jpg";
import aztecsImage from "@assets/aztecs.jpg";
import LoadingIcon from "@components/Icons/LoadingIcon/LoadingIcon";

interface Player {
  id: string;
  name: string;
}

interface Team {
  id: string;
  team_name: string;
  players: Player[];
  logo?: string;
}

export default function Home() {
  // extracting data from usesession as session
  const { data: session, status } = useSession();
  const [selectedTeam, setSelectedTeam] = useState<Team[]>([]);
  const [signinType, setSigninType] = useState('')

  // checking if sessions exists
  if (session) {
    // rendering components for logged in users
    return (
      <div className="w-full h-screen flex flex-col justify-start items-center relative">
        <header className="w-full flex flex-row min-h-10 p-2 bg-slate-50 mb-4 shadow-lg shadow-slate-500/50">
          <div
            className={`flex ${
              selectedTeam.length < 1 ? "justify-end" : "justify-between"
            } h-full flex-row gap-1`}
          >
            {selectedTeam.length > 0 && (
              <span className="flex flex-row gap-1 items-center">
                {" "}
                <BackArrowIcon onClick={() => setSelectedTeam([])} />
              </span>
            )}{" "}
            <span className="flex flex-row gap-1 items-center">
              <p className="p-2">
                Basketball Substitutions
                <span className="font-bold">
                  {" "}
                  {selectedTeam.length < 1 ? " - Teams" : " - Players"}
                </span>
              </p>
              <Image
                className="rounded-full w-8 h-8" // Use custom class for mobile and standard for larger screens
                src={
                  !selectedTeam?.[0]?.team_name
                    ? session.user?.image || ""
                    : selectedTeam[0].team_name
                        .toLowerCase()
                        .includes("lightning")
                    ? lightningHoopsImage
                    : aztecsImage
                }
                alt="Team Logo"
                width={20} // Next.js Image component requires width and height attributes
                height={20} // Set height same as width to maintain aspect ratio
              />
            </span>
          </div>
        </header>
        <div className="h-full flex flex-col overflow-hidden sm:min-w-80 min-w-full">
          {selectedTeam.length > 0 && (
            <TeamList className="" team={selectedTeam} />
          )}
          <Teams
            team={selectedTeam}
            onClick={(team: Team) => setSelectedTeam([team])}
            className={selectedTeam.length > 0 ? "hidden" : ""}
          />
           <div className="flex justify-end items-center p-2 w-full text-xs">
            <button
              className="text-slate-500"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </div>
        </div>
       
      </div>
    );
  }

  // rendering components for not logged in users
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4 py-4">
      <h1 className="text-2xl font-bold">Basketball Substitutions</h1>
      <Image
        className="rounded-md"
        priority={true}
        width="200"
        height={undefined}
        src={basketballImage}
        alt="Basketball and hoop"
      />
      <div className="w-full flex flex-col justify-start items-center gap-4">
        <button
          className="bg-blue-600 hover:bg-blue-900 py-2 px-6 rounded-md text-slate-50"
          onClick={() => (signIn("google"), setSigninType('google'))}
        >
          {(status === 'unauthenticated' || status === 'loading') && signinType === 'google'  ? <LoadingIcon className="w-20px h-20px animate-spin"/> : 'Sign in with Google'}
        </button>
        <button
          className="bg-slate-600 hover:bg-slate-900 py-2 px-6 rounded-md text-slate-50"
          onClick={() => (signIn("github"), setSigninType('github'))}
        >
          {(status === 'unauthenticated' || status === 'loading') && signinType === 'github' ? <LoadingIcon className="w-20px h-20px animate-spin"/> : 'Sign in with Github'}
        </button>
      </div>
    </div>
  );
}
