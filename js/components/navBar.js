import { utilities } from "../utililies/utilities.js";

/**
 * Clase base para la creacion de navBar
 * @class
 * @author Camilo Morales Sanchez
 */


export class NavBar {
  /**Propiedad encargada de inyectar utilidades para crear componentes */
  #utilities;
   /**Propiedad que contiene el nodo padre donde sera inyectado el nodo creado */
  #parentNode;
  #navBar;
  #userGame;

  /**
   * @constructor
   * @param {*} userGame - usuario logeado en el aplicativo
   * @author Camilo Morales Sanchez
   */
  constructor(userGame) {
    this.#utilities = utilities;
    this.#parentNode = document.querySelector("body");
    this.#userGame = userGame;
  }

  /**
   * @method metodo encargado de crear el componente navbar
   * @author Camilo Morales Sanchez
   */
  createNavBar() {
    const navBar = this.#utilities.createComponent("nav", [
      "navbar",
      "navbar-expand-lg",
      "navbar-dark",
      "bg-dark",
      "shadow",
    ]);
    const navBar_container = this.#utilities.createComponent("div", [
      "container",
      "d-flex",
      "flex-wrap",
      "justify-content-between",
    ]);
    const navBar_containerPlayer = this.#utilities.createComponent("div", [
      "text-light",
      "d-flex",
      "flex-wrap",
    ]);
    const spanPlayerName = this.#utilities.createComponent(
      "span",
      ["nav-item", "nav-link", "text-secondary"],
      "player-name",
      null,
      `${this.#userGame.name}`
    );
    const navBar_containerPoints = this.#utilities.createComponent("div", [
      "d-flex",
      "flex-wrap",
    ]);
    const spanPlayerPoints = this.#utilities.createComponent(
      "span",
      ["nav-item", "nav-link", "text-secondary"],
      "player-points",
      null,
      `Total puntos: ${this.#userGame.category.points} Nivel: ${
        this.#userGame.category.level
      } `
    );

    const btnLogout = this.#utilities.createComponent(
      "span",
      ["btn", "btn-outline-secondary"],
      "btn-logout",
      null,
      "Salir"
    );

    //Se agregan eventos
    btnLogout.addEventListener("click", this.#eventButton());

    // Estilos de los tags
    navBar.style.display = "none";

    //Se agregan los tags a los nodos padres
    navBar_containerPoints.append(spanPlayerPoints);
    navBar_containerPlayer.append(spanPlayerName, btnLogout);
    navBar_container.append(navBar_containerPoints, navBar_containerPlayer);
    navBar.append(navBar_container);

    // Inserta nodo a nodo padre
    this.#parentNode.insertBefore(navBar, document.getElementById("container"));

    this.#navBar = navBar;
  }

  get navBar() {
    return this.#navBar;
  }

  /**
   * Elimina el registro del usuario logeado en el local storage
   * @method
   * @returns 
   * @author Camilo Morales Sanchez
   */
  #eventButton() {
    return (event) => {
      localStorage.setItem(
        "userGame",
        JSON.stringify({
          name: "",
          logged: false,
          category: {
            level: 1,
            categoryName: "Fundamentos de programación",
            points: 0,
          },
        })
      );
      location.reload();
    };
  }
}
