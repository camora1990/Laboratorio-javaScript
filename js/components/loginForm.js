import { utilities } from "../utililies/utilities.js";

/**
 * Crea el componente de formulario de registro
 * @class
 * @author Camilo Morales Sanchez
 */

class LoginForm {
  /**Propiedad encargada de inyectar utilidades para crear componentes */
  #utilities;
  /**Propiedad que contiene el nodo padre donde sera inyectado el nodo creado */
  #parentNode;
  #formloginNode;

  /**
   * @constructor
   */
  constructor() {
    this.#utilities = utilities;
    this.#parentNode = document.getElementById("container");
  }

  /**
   * Funcion encarga de crear y agregar en el dom el formulario
   * @function
   * @author Camilo Morales Sanchez
   */
  createLoginForm() {
    // Se crean los tags necesarios para el formulario
    const form = this.#utilities.createComponent("form", ["mt-2"], "loginform");
    const titleForm = this.#utilities.createComponent(
      "h2",
      ["mb-3", "pb-3", "text-center", "text-bold"],
      null,
      null,
      "Registro"
    );
    const componentInputNameForm = this.#utilities.createComponent("div", [
      "form-floating",
      "mb-3",
    ]);
    const inputNameForm = this.#utilities.createComponent(
      "input",
      ["form-control", "form-control-lg"],
      "floatingNameLogin",
      "name"
    );
    const labelName = this.#utilities.createComponent(
      "label",
      ["form-label", "text-muted"],
      null,
      null,
      "Nombre usuario"
    );
    const PrincipalContainerForm = this.#utilities.createComponent(
      "div",
      ["row", "justify-content-center", "p-3"],
      "container-form"
    );
    const containerForm = this.#utilities.createComponent("div", [
      "col-12",
      "col-lg-6",
      "p-4",
      "mb-5",
      "bg-body",
      "rounded-3",
      "mt-5",
      "custom-tarjetas",
    ]);
    const btnForm = this.#utilities.createComponent(
      "button",
      ["form-control", "btn", "btn-outline-secondary"],
      "btnLoginForm",
      null,
      "Iniciar"
    );

    //Se agrega atributos necesarios en los tags
    labelName.setAttribute("for", "floatingNameLogin");
    btnForm.setAttribute("type", "submit");
    inputNameForm.required = true;
    inputNameForm.placeholder = "Nombre usuario";

    // Estilos de los tags
    PrincipalContainerForm.style.display = "none";

    // Se agregan evento
    form.addEventListener("submit", this.#addEvent());

    //Se agregan los tags a los nodos padres
    componentInputNameForm.append(inputNameForm, labelName);
    form.append(titleForm, componentInputNameForm, btnForm);
    containerForm.append(form);
    PrincipalContainerForm.append(containerForm);

    this.#formloginNode = PrincipalContainerForm;
    this.#parentNode.append(this.#formloginNode);
  }

  /**
   *
   * @returns - Retona el evento a agregar en el formulario
   * @author Camilo Morales Sanchez
   */
  #addEvent() {
    return (event) => {
  
      const infoPlayer = JSON.parse(localStorage.getItem("userGame"));
      event.preventDefault();

      const name = document.getElementById("floatingNameLogin").value;
      localStorage.setItem(
        "userGame",
        JSON.stringify({
          ...infoPlayer,
          name,
          logged: true,
        })
      );
      document.getElementById("container-form").classList.remove("d-flex");

      document.getElementById("starterGameModal").style.display = ""
      
    };
  }

  get formloginNode() {
    return this.#formloginNode;
  }

  get parentNode() {
    return this.#parentNode;
  }
}

export const loginForm = new LoginForm();
