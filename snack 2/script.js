function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const teams = [
  {
    name: "Benevento",
    points: getRandomNumber(0, 100),
    fouls: getRandomNumber(0, 50),
  },

  {
    name: "Avellino",
    points: getRandomNumber(0, 100),
    fouls: getRandomNumber(0, 50),
  },

  {
    name: "Salernitata",
    points: getRandomNumber(0, 100),
    fouls: getRandomNumber(0, 50),
  },

  {
    name: "Napoli",
    points: getRandomNumber(0, 100),
    fouls: getRandomNumber(0, 50),
  },

  {
    name: "Casertana",
    points: getRandomNumber(0, 100),
    fouls: getRandomNumber(0, 50),
  },
];

console.log(teams);

const teamsNameFouls = teams.map((team) => ({
  name: team.name,
  fouls: team.fouls,
}));

console.log(teamsNameFouls);
