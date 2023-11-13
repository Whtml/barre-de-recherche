const teams = [
  {
    id: 1,
    name: "Real Madrid",
    logo: "https://upload.wikimedia.org/wikipedia/fr/archive/c/c7/20190512221327%21Logo_Real_Madrid.svg",
    league: "La Liga (ESP)",
    founded: 1902,
    description: "https://www.realmadrid.com/fr",
  },
  {
    id: 2,
    name: "Barcelona",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/a/a1/Logo_FC_Barcelona.svg/1011px-Logo_FC_Barcelona.svg.png",
    league: "La Liga (ESP)",
    founded: 1899,
    description: "https://www.realmadrid.com/fr",
  },
  {
    id: 3,
    name: "Manchester United",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b9/Logo_Manchester_United.svg/2021px-Logo_Manchester_United.svg.png",
    league: "Premier League (ENG)",
    founded: 1878,
    description: "https://www.realmadrid.com/fr",
  },
  {
    id: 4,
    name: "Liverpool",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/5/54/Logo_FC_Liverpool.svg/886px-Logo_FC_Liverpool.svg.png?20190512221149",
    league: "Premier League (ENG)",
    founded: 1892,
    description: "https://www.realmadrid.com/fr",
  },
  {
    id: 5,
    name: "Paris Saint-Germain",
    logo: "https://upload.wikimedia.org/wikipedia/fr/archive/8/86/20180604160737%21Paris_Saint-Germain_Logo.svg",
    league: "Ligue 1 (FRA)",
    founded: 1970,
    description: "https://www.realmadrid.com/fr",
  },
  {
    id: 6,
    name: "AC Milan",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/1306px-Logo_of_AC_Milan.svg.png",
    league: "Serie A (ITA)",
    founded: 1899,
  },
  {
    id: 7,
    name: "Borussia Dortmund",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/2048px-Borussia_Dortmund_logo.svg.png",
    league: "Bundesliga (GER)",
    founded: 1909,
    description: "https://www.realmadrid.com/fr",
  },
  {
    id: 8,
    name: "Ajax",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/7/77/Ajax_Amsterdam_Logo.svg/2000px-Ajax_Amsterdam_Logo.svg.png",
    league: "Eredivisie (NED)",
    founded: 1900,
    description: "https://www.realmadrid.com/fr",
  },
  {
    id: 9,
    name: "Boca Juniors",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Boca_Juniors_logo18.svg/649px-Boca_Juniors_logo18.svg.png",
    league: "Argentine Primera División (ARG)",
    founded: 1905,
    description: "https://www.realmadrid.com/fr",
  },
  {
    id: 10,
    name: "Feyenoord",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/2/24/Logo_Feyenoord_Rotterdam.svg/1200px-Logo_Feyenoord_Rotterdam.svg.png",
    league: "Eredivisie (NED)",
    founded: 1908,
    description: "https://www.realmadrid.com/fr",
  },
];

const useTeams = () => {
  const getTeamById = (id) => {
    return teams.find((team) => parseInt(team.id) === parseInt(id));
  };
  return { teams, getTeamById };
};

export default useTeams;
