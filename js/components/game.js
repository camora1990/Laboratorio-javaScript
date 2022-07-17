import { questionInitialData } from "../data/questions.js";
import { utilities } from "../utililies/utilities.js";

export class Game {
  /**Propiedad encargada de inyectar utilidades para crear componentes */
  #utilities;
  /**Propiedad que contiene el nodo padre donde sera inyectado el nodo creado */
  #parentNode;

  /**Propiedad que contiene la pregunta de la ronda*/
  #question;

  /**Propiedad que contiene el nodo creado*/
  #questionNode;

  /**Propiedad que contiene la opcion seleccionada por el jugador*/
  #optionSelected;

  /** Propiedad que contiene los datos del jugador */
  #player;

  /**
   * @constructor
   * @author Camilo Morales Sanchez
   */
  constructor() {
    this.#utilities = utilities;
    this.#parentNode = document.getElementById("container");
    this.#player = JSON.parse(localStorage.getItem("userGame"));
    this.#optionSelected = null;
  }

  /**
   * @param {level} - Nivel en el que se encuentra el usuario
   * @method metodo - Encargado de crear el componente ModalQuestions con las preguntas del nivel enviado
   * @author Camilo Morales Sanchez
   */

  createQuestionModal(level = null) {
    if (!level) {
      alert("opps algo salio mal");
      return;
    }

    const { question, category, options } = this.#ramdomQuestion(level);

    const container = this.#utilities.createComponent(
      "div",
      [],
      "question-container"
    );

    const h1LevelTitle = this.#utilities.createComponent(
      "h1",
      ["text-center", "mt-2", "mb-3", "text-light"],
      null,
      null,
      `Nivel: ${category.level}`
    );
    const h3InformationLevel = this.#utilities.createComponent(
      "h3",
      ["text-center", "mt-5", "text-light"],
      null,
      null,
      `Categoria: ${category.categoryName} por ${String(
        category.points
      ).replace(/\B(?=(\d{3})+\b)/g, ",")} puntos`
    );

    const containerQuestion = this.#utilities.createComponent("div", [
      "bg-transparent",
      "alert",
      "alert-light",
      "rounded",
      "animate__animated",
      "animate__fadeInDown",
      "border-0",
      "custom-tarjetas",
      "btn-custom",
    ]);

    const hr = this.#utilities.createComponent("hr");

    const h5TitleNextlevel = this.#utilities.createComponent(
      "h5",
      ["alert-heading", "custom-tarjetas", "bg-light", "p-4", "rounded"],
      null,
      null,
      `${category.level}. ${question}`
    );

    let componentButton;
    const btnOptions = options.map((option, index) => {
      componentButton = this.#utilities.createComponent(
        "button",
        [
          "btn",
          "btn-outline-secondary",
          "w-100",
          "mb-3",
          "p-2",
          "custom-tarjetas",
          "btn-custom",
        ],
        null,
        null,
        option.item
      );
      componentButton.setAttribute("data-question-id", index);

      componentButton.addEventListener("click", this.#eventOptionSelected());
      return componentButton;
    });

    const btnsendResponse = this.#utilities.createComponent(
      "buttom",
      ["btn", "btn-success", "float-end"],
      "btn-send",
      null,
      "Enviar respuesta"
    );

    //Se agrega atributos necesarios en los tags
    containerQuestion.role = "alert";

    //Se agregan los tags a los nodos padres
    containerQuestion.append(
      h5TitleNextlevel,
      hr,
      ...btnOptions,
      btnsendResponse
    );

    // Se agregan eventos
    btnsendResponse.addEventListener("click", this.#eventSendResposeSelected());

    container.append(h1LevelTitle, h3InformationLevel, containerQuestion);
    this.#questionNode = container;
    this.#parentNode.append(container);
  }

  /**
   *
   * Este metodo obtiene una pregunta aleatoria correspondiente al nivel enviado
   * @param {number} level -Nivel para obtener la pregunta aleatoria perteneciente a ese nivel
   * @returns -retorna pregunta
   * @author Camilo Morales Sanchez
   */

  #ramdomQuestion(level) {
    const questions = questionInitialData.filter(
      (q) => q.category.level === level
    );
    const random = Math.floor(
      Math.random() * (questions.length - 1 - 0 + 1) + 0
    );
    this.#question = questions[random];
    return this.#question;
  }

  /**
   * Este metodo asigna la opcion seleccionada por el jugador
   * @method metodo evento click de boton opciones
   * @returns - retorna el evento
   * @author Camilo Morales Sanchez
   */
  #eventOptionSelected() {
    return (event) => {
      this.#optionSelected =
        this.#question.options[event.target.dataset.questionId];
    };
  }

  /**
   * Muestra un modal de confirmacion al dar click en enviar respuesta
   * @returns evento para confirmar la seleccion
   * @author Camilo Morales Sanchez
   */
  #eventSendResposeSelected() {
    return (event) => {
      this.#optionSelected
        ? Swal.fire({
            title: "¿Estás seguro de enviar la opción seleccionada? ",
            text: "¡No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, estoy seguro",
          }).then((result) => {
            if (result.isConfirmed) {
              this.#validateResponse();
            }
          })
        : Swal.fire("Debes seleccionar una opción");
    };
  }

  /**
   * Metodo encargado de validar la respuesta enviada por el usuario
   * @method
   * @author Camilo Morales Sanchez
   */

  #validateResponse() {
    if (this.#optionSelected.isCorrect) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Felicidades pasate al siguiente nivel",
        showConfirmButton: false,
        timer: 1500,
      });
      this.#nextLevel();
    } else {
      this.#messageWrongAnswer();
    }
  }

  /**
   *
   * Encargado de realizar el cambio de nivel en el juego
   * @method
   * @author Camilo Morales Sanchez
   */

  #nextLevel() {
    this.#player = JSON.parse(localStorage.getItem("userGame"));
    const { category } = this.#question;
    const { level, points } = category;
    if (level < 5) {
      this.#parentNode.removeChild(this.#questionNode);
      this.createQuestionModal(level + 1);
      localStorage.setItem(
        "userGame",
        JSON.stringify({
          name: this.#player.name,
          logged: true,
          category: {
            level: level + 1,
            categoryName: category.categoryName,
            points: this.#player.category.points + points,
          },
        })
      );
      this.#player = JSON.parse(localStorage.getItem("userGame"));
      this.#optionSelected = null;
      document.getElementById("player-points").innerHTML = `Total puntos: ${
        this.#player.category.points
      } Nivel: ${parseInt(level) + 1}`;
    } else {
      this.#messageWinner();
    }
  }

  /**
   * Muestra modal al ganador con opciones de de reiniciar el juego o salirse
   * @method
   * @author Camilo Morales Sanchez
   */

  #messageWinner() {
    Swal.fire({
      title: `Felicitaciones ${this.#player.name}`,
      html: `Eres el ganador del premio mayor acumulando <b>${
        this.#player.category.points
      }</b> puntos`,
      width: 600,
      padding: "3em",
      color: "#3f4144",
      background: "#fff url(../assets/img/confetti.gif)",
      showCancelButton: true,
      confirmButtonText: "Jugar de nuevo",
      cancelButtonText: "Salir de juego",
      reverseButtons: true,
      backdrop: `
        rgba(0,0,0,0.4)
        url("../../assets/img/ganadores.gif")
        left top
        no-repeat
      `,
    }).then(async (e) => {
      if (e.isConfirmed) {
        this.#player = {
          ...this.#player,
          category: {
            level: 1,
            categoryName: "Fundamentos de programación",
            points: 0,
          },
        };
        localStorage.setItem("userGame", JSON.stringify(this.#player));
        location.reload();
      } else {
        document.getElementById("btn-logout").click();
      }
    });
  }

  /**
   * Muestra modal al respuesta incorrecta con opciones de de reiniciar el juego o salirse
   * @method
   * @author Camilo Morales Sanchez
   */
  #messageWrongAnswer() {
    Swal.fire({
      title: "Respuesta incorrecta",
      text: "Sigue practicando",
      icon: "error",
      iconColor: "transparent",
      background: "#fff url(../../assets/img/76ck.gif)",
      color: "#000000",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Intentarlo de nuevo",
      cancelButtonText: "Salir del juego",
    }).then((result) => {
      if (result.isConfirmed || result.isDenied) {
        debugger
        this.#player = {
          ...this.#player,
          category: {
            level: 1,
            categoryName: "Fundamentos de programación",
            points: 0,
          },
        };
        localStorage.setItem("userGame", JSON.stringify(this.#player));
        location.reload();
      } else {
        document.getElementById("btn-logout").click();
      }
    });
  }
}

export const game = new Game();
