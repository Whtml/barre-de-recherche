import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useTeams from "../Hooks/useTeams";

const Container = styled.div`
  .team-logo {
    width: 40px; /* Ajustez la taille selon vos besoins */
    height: 40px; /* Pour maintenir la proportion de l'image */
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }

  li {
    width: calc(
      33.33% - 10px
    ); /* 3 équipes par ligne avec un petit espace entre elles */
    margin: 5px;
    text-align: center;
    position: relative;
  }
  .team-button {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s;
  }

  li:hover .team-button {
    opacity: 1;
  }
`;

const TeamList = () => {
  const { teams } = useTeams();
  const [searchTerm, setSearchTerm] = useState(""); // État pour la valeur de recherche
  const [filteredTeams, setFilteredTeams] = useState(teams);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filtered = teams.filter(
      (team) =>
        team.name.toLowerCase().includes(query) ||
        team.league.toLowerCase().includes(query) ||
        team.founded.toString().includes(query)
    );
    setFilteredTeams(filtered);
    setSearchTerm(event.target.value);
  };

  return (
    <Container>
      <h2>Liste d'Équipes de Football</h2>
      <div>
        Search:{" "}
        <input
          name="query"
          type="text"
          onChange={handleSearch}
          value={searchTerm}
        />
      </div>
      <ul>
        {filteredTeams.map((team, index) => (
          <li key={index}>
            <h3>{team.name}</h3>
            <p>Ligue : {team.league}</p>
            <p>Date de création : {team.founded}</p>
            <img src={team.logo} alt={team.name} className="team-logo" />
            <Link to={`/${team.id}`}>
              <button className="team-button">Détails</button>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default TeamList;

// //1) Pouvoir filtrer sur tous les champs via la barre de recherche
// 2) Faire un bouton qui redirige vers la page de l'équipe en question.
// 3) Sur la page équipe, réafficher les informations en plus gros, et faire une section commentaire.
// 4) Pour poster un commentaire, on peut mettre les champs suivants : "name", "comment".
// 5) Mettre la date et l'heure du commentaire et les trier par ordre d'apparition.
