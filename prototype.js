//-------------Object.create() --------------------------------

let mashrafi = {
  name: "mashrafi",
  age: 36,
  nature: "Player",
};
const Player = Object.create(mashrafi);
console.log(Player.name, Player.age, Player.nature);
