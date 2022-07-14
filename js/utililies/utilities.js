/**
 * Utilidades generales de la aplicacion como creacioin de componentes
 * @class
 * @author Camilo Morales Sanchez
 */

class Utilities {
  /**
   *
   * @param {String} tagName - etiqueta html
   * @param {String []} classes - clases de la etiqueta
   * @param {String} id -id de la etiqueta
   * @param {String} name - nombre de la tiqueta
   * @param {String} value - valor del campo
   * @returns {HTMLElement} Etiqueta HTML
   * @author Camilo Morales Sanchez
   */
  createComponent(tagName, classes = [], id = null, name = null, value = null) {
    const tag = document.createElement(tagName);
    classes.length > 0 && tag.classList.add(...classes);
    id && (tag.id = id);
    name && (tag.name = name);
    value && tagName != "li" && (tag.value = value);
    value && (tag.textContent = value);
    value && (tag.innerText = value);
    return tag;
  }
}

const utilities = new Utilities();

export { utilities };

