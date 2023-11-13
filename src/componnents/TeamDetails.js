import React from "react";
import { useParams } from "react-router-dom";
import useTeams from "../Hooks/useTeams";
import ContainerComments from "./ContainerComments";

const TeamDetails = () => {
  const { id } = useParams();
  const { getTeamById } = useTeams();
  const team = getTeamById(id);
  if (!team) {
    return <div>Équipe non trouvée</div>;
  }

  return (
    <div>
      <div>
        <h2>{team.name}</h2>
        <a href={team.description}>
          <p>{team.description}</p>
        </a>
      </div>
      <ContainerComments teamId={id} />
    </div>
  );
};

export default TeamDetails;
