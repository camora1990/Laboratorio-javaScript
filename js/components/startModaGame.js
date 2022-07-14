
import { utilities } from "../utililies/utilities.js";
import { game } from "./game.js";



const instructions = [
  `El juego tiene 5 rondas, cada ronda tiene asignada una categoría y cada categoría tiene unas preguntas, el sistema escoge una pregunta aleatoriamente.`,
  `El jugador selecciona una opción de las 4 disponibles, si la respuesta es incorrecta el juego termina, si acierta pasa de ronda y aumenta la complejidad.`,
  `Cada ronda tiene una puntuación que se irá acumulando a medida que pase a la siguiente.`,
  `Se gana si se responden las 5 categorías.`,
];

/**
 * Se encarga de iniaciar el juego
 * @class
 * @author Camilo Morales Sanchez
 */

class StartModaGame {
  /**Propiedad encargada de inyectar utilidades para crear componentes */
  #utilities;
  /**Propiedad que contiene el nodo padre donde sera inyectado el nodo creado */
  #parentNode;
  /**Propiedad que contiene el nodo creado */
  #starterGameModal;

  #game;

  constructor() {
    this.#parentNode = document.querySelector("#container");
    this.#utilities = utilities;
    this.#game = game;
  }

  /**
   * metodo encarga de la creacion del modal para dar inicio al juego
   * @method
   * @author Camilo Morales Sanchez
   */
  createModal() {
    const card = this.#utilities.createComponent(
      "div",
      [
        "custom-tarjetas",
        "rounded",
        "alert",
        "alert-light",
        "mt-5",
        "animate__animated",
        "animate__fadeIn",
      ],
      "starterGameModal"
    );

    const titleCard = this.#utilities.createComponent(
      "h4",
      ["alert-heading"],
      null,
      null,
      "Instrucciones del juego"
    );

    const olCard = this.#utilities.createComponent("ol");

    const btnInitGame = this.#utilities.createComponent(
      "button",
      ["btn", "btn-outline-secondary"],
      "btn-init",
      null,
      "Iniciar juego"
    );

    //Se agrega atributos necesarios en los tags
    card.setAttribute("role", "alert");

    // Estilos de los tags
    card.style.display = "none";

    // Se agregan eventos
    btnInitGame.addEventListener("click", this.#eventInitGame());

    //Se agregan los tags a los nodos padres
    instructions.forEach((ele, index) => {
      olCard.append(this.#utilities.createComponent("li", [], null, null, ele));
    });
    card.append(titleCard, olCard, btnInitGame);

    this.#parentNode.append(card);

    this.#starterGameModal = card;
  }

  /**
   *
   * @returns retorna el evento para el boton del modal iniciar juego
   * @author Camilo Morales Sanchez
   */
  #eventInitGame() {
    return (event) => {
    

      const { name } = JSON.parse(localStorage.getItem("userGame"));
      document.getElementById("starterGameModal").style.display = "none";
      document.querySelector("nav").style.display = "";

      document.getElementById("player-points").innerHTML =
        "Total puntos: 0 Nivel: 1";

      document.getElementById("player-name").innerHTML = name;

      this.#game.createQuestionModal(1);
    };
  }

  

  get starterGameModal() {
    return this.#starterGameModal;
  }
}

export const startModaGame = new StartModaGame();
