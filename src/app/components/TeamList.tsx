import React, { FC } from 'react'

interface Team {
 id: string;
 team_name: string;
 players: any;
}

export type TeamListProps = {
  className: string;
  team: Team[];
};

const TeamList: FC<TeamListProps> = ({
className,
team
}) => {

  return (<div className={`${className ? className : 'px-5 py-5'}`}>
  <ul>
 {team?.length > 0 && team[0].players?.map((player: { name: string, id: string }) => (<li key={player.id}className='text-center px-1 py-1'>{player.name}</li> ))}
  </ul>
  </div>
  )
}
export default TeamList