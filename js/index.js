import { game } from "./game.js";
let userGame = {
  name: "",
  logged: false,
  category: {
    level: 1,
    categoryName: "Bases de datos",
    points: 0,
  },
};

if (localStorage.getItem("userGame")) {
  userGame = JSON.parse(localStorage.getItem("userGame"));
} else {
  localStorage.setItem("userGame", JSON.stringify(userGame));
}

game(userGame);
