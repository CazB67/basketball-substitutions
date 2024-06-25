import { getRandomColor } from "app/helpers";
import React, { FC, useEffect, useState } from "react";
import XIcon from "./Icons/XIcon/xIcon";
import { supabase } from "@lib/supabase/server";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";

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

export type TeamListProps = {
  className?: string;
  team: Team[];
};

const TeamList: FC<TeamListProps> = ({ className, team }) => {
  const [currentTeam, setCurrentTeam] = useState<Team>(team[0]);
  const [newPlayer, setNewPlayer] = useState<string>("");

  useEffect(() => {
    setCurrentTeam(team[0]);
  }, [team]);

  const deletePlayer = async (e: React.MouseEvent, playerId: string) => {
    e.stopPropagation();
    const newPlayers = currentTeam.players.filter(
      (player) => player.id !== playerId
    );
    console.log({ team, newPlayers });
    const { data, error } = await supabase
      .from("teams")
      .update({ players: newPlayers })
      .eq("id", currentTeam.id);
    if (!error) setCurrentTeam({ ...currentTeam, players: newPlayers });
  };

  const addPlayer = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    const newPlayers = currentTeam.players.concat({
      name: newPlayer,
      id: uuidv4(),
    });
    console.log({ team, newPlayers });
    const { data, error } = await supabase
      .from("teams")
      .update({ players: newPlayers })
      .eq("id", currentTeam.id);
    if (!error) setCurrentTeam({ ...currentTeam, players: newPlayers });
    setNewPlayer("");
  };

  const updateTeam = async (copyPlayers: Player[]) => {
   
    const { data, error } = await supabase
      .from("teams")
      .update({ players: copyPlayers })
      .eq("id", currentTeam.id);
    if (!error) setCurrentTeam({ ...currentTeam, players: copyPlayers });
    setNewPlayer("");
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const startIndex = result.source.index;
    const endIndex = result.destination.index;
    const copyPlayers = [...currentTeam.players];
    const [reorderPlayer] = copyPlayers.splice(startIndex, 1);
    copyPlayers.splice(endIndex, 0, reorderPlayer);
    setCurrentTeam({ ...currentTeam, players: copyPlayers });
    updateTeam(copyPlayers)
  };

  return (
    <div className={className ? className : "px-5 py-5 bg-slate-50 rounded-md overflow-y-auto"}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="players">
          {(droppableProvider) => (
            <ul
              className="flex flex-col gap-2"
              ref={droppableProvider.innerRef}
              {...droppableProvider.droppableProps}
            >
              {currentTeam &&
                currentTeam.players?.map((player, index) => (
                  <Draggable
                    index={index}
                    key={player.id}
                    draggableId={player.id}
                  >
                    {(draggableProvider) => (
                      <li
                        className={`text-center p-4 bg-blue-300 cursor-pointer rounded-lg ${getRandomColor()}`}
                        ref={draggableProvider.innerRef}
                        {...draggableProvider.draggableProps}
                        {...draggableProvider.dragHandleProps}
                      >
                        <span className="flex w-full justify-between">
                          {player.name}
                          <XIcon
                            onClick={(e: React.MouseEvent) =>
                              deletePlayer(e, player.id)
                            }
                          />
                        </span>
                      </li>
                    )}
                  </Draggable>
                ))}
              {droppableProvider.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <input
        onChange={(e) => setNewPlayer(e.target.value)}
        onKeyDown={addPlayer}
        type="text"
        name="players"
        className="mt-4 px-3 py-2 bg-white shadow-sm placeholder-slate-400 focus:outline-none block w-full rounded-md sm:text-sm focus:ring-1"
        placeholder="Enter player"
        value={newPlayer}
      />
    </div>
  );
};

export default TeamList;
