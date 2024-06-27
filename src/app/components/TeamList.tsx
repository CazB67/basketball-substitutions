import { getRandomColor } from "app/helpers";
import React, { FC, useEffect, useState, useRef } from "react";
import XIcon from "./Icons/XIcon/xIcon";
import { supabase } from "@lib/supabase/server";
import { v4 as uuidv4 } from "uuid";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";

interface Player {
  id: string;
  name: string;
}

interface SubbedCount {
  [id: string]: number;
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
  const [chosenPlayers, setChosenPlayers] = useState<Set<string>>(new Set());
  const [subCount, setSubCount] = useState<SubbedCount>({});
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const currentBatchIndexRef = useRef(0);
  const [countdown, setCountdown] = useState<number>(180); // Countdown in seconds
  const countdownRef = useRef<number>(180); // Store countdown in a ref to preserve value during pause

  useEffect(() => {
    setCurrentTeam(team[0]);
  }, [team]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (chosenPlayers.size > 0 && intervalId) {
        setCountdown((prevCountdown) => {
          if (prevCountdown > 0) {
            countdownRef.current = prevCountdown - 1;
            return prevCountdown - 1;
          } else {
            return prevCountdown;
          }
        });
      }
    }, 1000); // Update countdown every second

    return () => {
      clearInterval(timerInterval);
    };
  }, [chosenPlayers, intervalId]);

  useEffect(() => {
    if (countdown === 0) {
      setCountdown(180);
      countdownRef.current = 180;
      clearInterval(intervalId!);
      setChosenPlayers(new Set());
      startChoosingPlayers(); // Restart choosing players
    }
  }, [countdown]);

  const deletePlayer = async (e: React.MouseEvent, playerId: string) => {
    e.stopPropagation();
    const newPlayers = currentTeam.players.filter(
      (player) => player.id !== playerId
    );
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
    updateTeam(copyPlayers);
  };

  const chooseNewPlayers = (
    players: Player[],
    batchSize: number,
    startIndex: number
  ): Set<string> => {
    return players.reduce((acc, player, index) => {
      if (acc.size < batchSize && player) {
        const playerId = players[(startIndex + index) % players.length].id;
        acc.add(playerId);
        updateSubCount(playerId);
      }
      return acc;
    }, new Set<string>());
  };

  const updateSubCount = (id: string) => {
    setSubCount((prevSubCount) => {
      const existingEntry = prevSubCount[id];
      if (existingEntry) {
        return { ...prevSubCount, [id]: existingEntry + 1 };
      } else {
        return { ...prevSubCount, [id]: 1 };
      }
    });
  };

  const startChoosingPlayers = () => {
    setIsPaused(false);
    const playerCount = currentTeam.players.length;
    if (playerCount <= 5) {
      setChosenPlayers(new Set());
      return;
    }

    const nonChosenCount = 5;
    const batchSize = playerCount - nonChosenCount;
    const initialChosenPlayers = chooseNewPlayers(
      currentTeam.players,
      batchSize,
      currentBatchIndexRef.current
    );
    setChosenPlayers(initialChosenPlayers);
    setCountdown(180); // Reset countdown when starting new batch
    countdownRef.current = 180; // Reset the countdown ref as well

    const newIntervalId = setInterval(() => {
      currentBatchIndexRef.current =
        (currentBatchIndexRef.current + batchSize) % playerCount;
      const newChosenPlayers = chooseNewPlayers(
        currentTeam.players,
        batchSize,
        currentBatchIndexRef.current
      );
      setChosenPlayers(newChosenPlayers);
      setCountdown(180); // Reset countdown when choosing new players
      countdownRef.current = 180; // Reset the countdown ref as well
    }, 180000); // 3 minutes in milliseconds

    setIntervalId(newIntervalId);
  };

  const stopChoosingPlayers = () => {
    setSubCount({});
    setChosenPlayers(new Set());
    pauseChoosingPlayers();
    currentBatchIndexRef.current = 0;
    setCountdown(180);
    countdownRef.current = 180;
  };

  const pauseChoosingPlayers = () => {
    if (intervalId) {
      setIsPaused(true);
      clearInterval(intervalId);
      setIntervalId(null);
    } else restartCountdown();
  };

  const restartCountdown = () => {
    setIsPaused(false);
    const timerInterval = setInterval(() => {
      if (chosenPlayers.size > 0 && intervalId) {
        setCountdown((prevCountdown) => {
          if (prevCountdown > 0) {
            countdownRef.current = prevCountdown - 1;
            return prevCountdown - 1;
          } else {
            return prevCountdown;
          }
        });
      }
    }, 1000);

    setIntervalId(timerInterval);
  };

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <div
      className={
        className
          ? className
          : "bg-slate-50 rounded-md overflow-y-auto p-3 shadow-lg shadow-slate-500/50 h-full relative"
      }
    >
      <div className={`${chosenPlayers.size ? "pb-3 text-center" : "hidden"}`}>
        <button className="bg-yellow-300 shadow-lg shadow-slate-500/50 rounded-md px-5 ">
          {Math.floor(countdown / 60) +
            ":" +
            ("0" + Math.floor(countdown % 60)).slice(-2)}
        </button>
      </div>
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
                        className={`text-center p-1.5 sm:p-4 px-3 cursor-pointer rounded-lg shadow-lg shadow-slate-500/50 ${getRandomColor()} ${
                          chosenPlayers.has(player.id)
                            ? "bg-red-500"
                            : "bg-blue-300"
                        }`}
                        ref={draggableProvider.innerRef}
                        {...draggableProvider.draggableProps}
                        {...draggableProvider.dragHandleProps}
                      >
                        <span className="flex w-full justify-between items-center">
                          <span className="p-1 flex justify-start w-full items-center gap-1">
                            {player.name}
                            <span
                              className={`${
                                subCount[player.id]
                                  ? "bg-slate-100 w-20px h-20px rounded-full text-xs leading-20px"
                                  : "hidden"
                              }`}
                            >
                              {subCount[player.id]}
                            </span>
                          </span>
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
      <div className="mt-4 flex justify-between gap-1">
        <button
          onClick={startChoosingPlayers}
          className="px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Start
        </button>
        <button
          onClick={pauseChoosingPlayers}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          {isPaused ? "Paused" : "Pause"}
        </button>
        <button
          onClick={stopChoosingPlayers}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TeamList;
