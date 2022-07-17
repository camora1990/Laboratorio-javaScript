import { game } from "./components/game.js";
import { loginForm } from "./components/loginForm.js";
import { NavBar } from "./components/navBar.js";
import { startModaGame } from "./components/startModaGame.js";

export function initGame(userGame) {
  const navar = new NavBar(userGame);

  navar.createNavBar();
  loginForm.createLoginForm();
  startModaGame.createModal();

  if (!userGame.logged) {
    loginForm.formloginNode.classList.add("d-flex");
  } else {
    if (userGame.category.level > 1) {
      navar.navBar.style.display = "";
      game.createQuestionModal(userGame.category.level);
    } else {
      startModaGame.starterGameModal.style.display = "";
    }
  }
}

[
  {
    "name": "prueba",
    "points": 1000,
    "email": "correo@correo.com",
    "level": 1
  }
];
