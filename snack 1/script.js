const bicycles = [
  {
    name: "Tarmac",
    weight: 7,
  },

  {
    name: "Checkpoint",
    weight: 8,
  },

  {
    name: "Scalpet",
    weight: 9,
  },

  {
    name: "Explore",
    weight: 12,
  },

  {
    name: "Kathamandu",
    weight: 25,
  },
];

let bicyclesLight = bicycles[0];

for (let i = 1; i < bicycles.length; i++) {
  if (bicycles[i].weight < bicyclesLight.weight) {
    bicyclesLight = bicycles[i];
  }
}

console.log("La bici più leggera è:", bicyclesLight.name);
