import { supabase } from "@lib/supabase/server";
import React, { FC, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import XIcon from "./Icons/XIcon/xIcon";
import { getRandomColor } from "app/helpers";

interface Team {
  id: string;
  team_name: string;
  players: any;
}

export type TeamsProps = {
  onClick: any;
  className: string;
  team: Team[];
};

const Teams: FC<TeamsProps> = ({ onClick, className, team }) => {
  const [showModal, setShowModal] = useState<Boolean>(false);
  const [players, setPlayers] = useState<String>("");
  const [teamName, setTeamName] = useState<String>("");
  const [teams, setTeams] = useState<Team[]>([]);

  const getTeams = async () => {
    const { data, error } = await supabase
      .from("teams")
      .select()
      .order("created_at", { ascending: true });
    if (!error && data) {
      setTeams(data);
    } else {
      setTeams([]);
    }
  };

  useEffect(() => {
    getTeams();
  }, []);

  const onCancelClick = () => {
    setShowModal(!showModal);
    setPlayers("");
    setTeamName("");
  };

  const convertStringToJSON = () => {
    // Split the input string by comma and trim any extra whitespace
    const items = players.split(",").map((item) => item.trim());

    // Create a JSON object with each item having a UUID
    const jsonObject = items.map((item) => ({
      id: uuidv4(),
      name: item,
    }));

    return jsonObject;
  };

  const handleAdd = async () => {
    let jsonObject;
    if (players) jsonObject = convertStringToJSON();
    try {
      const response = await fetch(`/api/teams/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          team_name: teamName,
          players: jsonObject,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log({data, teams})
        setTeams(teams.concat(data.teams));
      } else {
        console.error("Error:", data.error);
      }
    } catch (error) {
      console.error("Network error:", error);
    } finally {
      onCancelClick();
    }
  };

  const handleDeleteTeam = async (e: React.MouseEvent, team: Team) => {
    e.stopPropagation();
    const response = await supabase.from("teams").delete().eq("id", team.id);
    if(response) setTeams(teams.filter(x => x.id !== team.id))
  };

  return (
    <>
      <div
        className={`${
          className
            ? className
            : "grid wide:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full max-w-wide px-5 py-5"
        }`}
      >
        {teams.map((team) => (
          <button
            onClick={() => onClick(team)}
            key={team.id}
            className={`relative flex text-left bg-gray-400 bg-opacity-50 backdrop-blur-xl p-9 overflow-hidden relative rounded-[25px] font-mono flex-col gap-1 group transition-all duration-500 ease-linear md:text-white hover:text-gray-700 text-gray-700 ${getRandomColor()}`}
          >
            <span className="flex w-full justify-between">
              {team.team_name}
              <XIcon
                onClick={(e: React.MouseEvent) => handleDeleteTeam(e, team)}
              />
            </span>
          </button>
        ))}
      </div>
      <button
        onClick={() => onCancelClick()}
        className={`${
          team?.length > 0
            ? "hidden"
            : "flex text-left bg-gray-400 bg-opacity-50 backdrop-blur-xl p-9 overflow-hidden relative rounded-[25px] font-mono flex-col gap-1 group transition-all duration-500 ease-linear md:text-white hover:text-gray-700 text-gray-700 hover:bg-fuchsia-300 py-5 mb-8"
        }`}
      >
        Add Team
      </button>
      <div
        className={showModal ? "darkBG" : "hidden"}
        onClick={() => onCancelClick()}
      />
      <div className={showModal ? "centered" : "hidden"}>
        <div className={showModal ? "modal" : "hidden"}>
          <div className="modalHeader">
            <h2 className="heading">Team Details</h2>
          </div>
          <div className="p-2 flex flex-col gap-2">
            <label className="block">
              <span className="block text-sm font-medium text-slate-700">
                Team Name
              </span>
              <input
                type="text"
                onChange={(e) => setTeamName(e.target.value)}
                name="teamName"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="you@example.com"
              />
            </label>
            <label className="block">
              <span className="block text-sm font-medium text-slate-700">
                Players
              </span>
              <input
                onChange={(e) => setPlayers(e.target.value)}
                type="text"
                name="players"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Enter names separated by a comma"
              />
            </label>
          </div>
          <div className="flex gap-2 justify-end p-2">
            <button
              onClick={() => onCancelClick()}
              className="border-slate-400 hover:bg-slate-200 w-40 h-10 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={() => handleAdd()}
              className="bg-lime-100 hover:bg-lime-200 w-40 h-10 rounded-lg"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
