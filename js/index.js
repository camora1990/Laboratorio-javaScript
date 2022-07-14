
import { initGame } from "./initGame.js";
let userGame = {
  name: "",
  logged: false,
  category: {
    level: 1,
    categoryName: "Fundamentos de programación",
    points: 0,
  },
};

if (localStorage.getItem("userGame")) {
  userGame = JSON.parse(localStorage.getItem("userGame"));
} else {
  localStorage.setItem("userGame", JSON.stringify(userGame));
}

initGame(userGame);
