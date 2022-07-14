


export const questionInitialData = [
  {
    question:
      "Las etapas que deben seguirse en la construcción de un programa son:",
    category: {
      level: 1,
      categoryName: "Fundamentos de programación",
      points: 10000,
    },
    options: [
      {
        item: "Análisis, algoritmo, diagrama de flujo, seudocódigo",
        isCorrect: false,
      },
      {
        item: "Análisis, seudocódigo, prueba de escritorio, implementación (codificar en un lenguaje de programación)",
        isCorrect: false,
      },
      {
        item: "Análisis, algoritmo, prueba de escritorio, implementación (codificar en un lenguaje de programación), prueba, instalación y uso del aplicativo",
        isCorrect: false,
      },
      {
        item: "Análisis, algoritmo, diagrama de flujo, seudocódigo, prueba de escritorio, implementación (codificar en un lenguaje de programación), prueba, instalación y uso del aplicativo",
        isCorrect: true,
      },
    ],
  },
  {
    question: "Un compilador es:",
    category: {
      level: 1,
      categoryName: "Fundamentos de programación",
      points: 10000,
    },
    options: [
      {
        item: "Un lenguaje de alto nivel",
        isCorrect: false,
      },
      {
        item: "El que permite traducir un programa escrito en un lenguaje de programación a lenguaje máquina.",
        isCorrect: true,
      },
      {
        item: "Una instrucción",
        isCorrect: false,
      },
      {
        item: "Una directiva de pre procesamiento",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "El diagrama de flujo es la representación grafica de un algoritmo, donde se visualiza el flujo de los datos y las operaciones (procesos) de un programa. Se caracteriza por:",
    category: {
      level: 1,
      categoryName: "Fundamentos de programación",
      points: 10000,
    },
    options: [
      {
        item: "Que debe ser construido por herramientas muy técnicas",
        isCorrect: false,
      },
      {
        item: "Utilizar formas geométricas elementales",
        isCorrect: false,
      },
      {
        item: "Su sencillez, claridad, uso de normas y símbolos, flexibilidad.",
        isCorrect: true,
      },
      {
        item: "Requerir un buen análisis del problema",
        isCorrect: false,
      },
    ],
  },
  {
    question: "Instrucción que permite almacenar un valor en una variable.",
    category: {
      level: 1,
      categoryName: "Fundamentos de programación",
      points: 10000,
    },
    options: [
      {
        item: "Leer",
        isCorrect: false,
      },
      {
        item: "Asignar",
        isCorrect: true,
      },
      {
        item: "Escribir",
        isCorrect: false,
      },
      {
        item: "Requerir un buen análisis del problema",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "En caso de presentarse una falla de sintaxis, en el proceso de programación, se procede a:",
    category: {
      level: 1,
      categoryName: "Fundamentos de programación",
      points: 10000,
    },
    options: [
      {
        item: "Ignorar los errores y ejecutar el programa.",
        isCorrect: false,
      },
      {
        item: "Comprender el mensaje de error que reporta el ambiente de programación, examinar el código del programa para identificar en cuál instrucción se encuentra la falla, corregir la falla, probar el programa de nuevo.",
        isCorrect: true,
      },
      {
        item: "Examinar el código del programa para identificar en cuál instrucción se encuentra la falla, corregir la falla.",
        isCorrect: false,
      },
      {
        item: "Examinar el código del programa para identificar en cuál instrucción se encuentra la falla, Comprender el mensaje de error que reporta el ambiente de programación.",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "Para añadir contenido al área de preparación (staging area), utilizo el siguiente comando:",
    category: {
      level: 2,
      categoryName: "Git",
      points: 15000,
    },

    options: [
      {
        item: "git push",
        isCorrect: false,
      },
      {
        item: "git diff",
        isCorrect: false,
      },
      {
        item: "git add",
        isCorrect: true,
      },
      {
        item: "git commit",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "Atajo que proporciona git, si quieres saltarte el área de preparación:",
    category: {
      level: 2,
      categoryName: "Git",
      points: 15000,
    },
    options: [
      {
        item: "git rm --cached readme.txt",
        isCorrect: false,
      },
      {
        item: " git commit -a",
        isCorrect: true,
      },
      {
        item: "git commit -m",
        isCorrect: false,
      },
      {
        item: "git commit",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "¿Cuál de los siguientes comandos crea una nueva rama local llamada develop?:",
    category: {
      level: 2,
      categoryName: "Git",
      points: 15000,
    },
    options: [
      {
        item: "git add develop",
        isCorrect: false,
      },
      {
        item: "git checkout -b develop",
        isCorrect: true,
      },
      {
        item: "git checkout -- develop",
        isCorrect: false,
      },
      {
        item: "git checkout develop",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "Si deseas obtener una copia de un repositorio Git existente en GitHub, el comando que necesitas es :",
    category: {
      level: 2,
      categoryName: "Git",
      points: 15000,
    },
    options: [
      {
        item: "git commit",
        isCorrect: false,
      },
      {
        item: "git add",
        isCorrect: false,
      },
      {
        item: "git log",
        isCorrect: false,
      },
      {
        item: "git clone",
        isCorrect: true,
      },
    ],
  },
  {
    question: "¿Qué comando es necesario para crear un repositorio?",
    category: {
      level: 2,
      categoryName: "Git",
      points: 15000,
    },
    options: [
      {
        item: "git status",
        isCorrect: false,
      },
      {
        item: "git add",
        isCorrect: false,
      },
      {
        item: "git init",
        isCorrect: true,
      },
      {
        item: "git config",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "¿Cuál es el lenguaje estándar específico para aplicar estilos de presentación a nuestras páginas web?",
    category: {
      level: 3,
      categoryName: "Desarrollo Front End",
      points: 20000,
    },

    options: [
      {
        item: "Javascript",
        isCorrect: false,
      },
      {
        item: "Flash",
        isCorrect: false,
      },
      {
        item: "CSS",
        isCorrect: true,
      },
      {
        item: "Jquery",
        isCorrect: false,
      },
    ],
  },
  {
    question: "¿Qué es XHTML?",
    category: {
      level: 3,
      categoryName: "Desarrollo Front End",
      points: 20000,
    },
    options: [
      {
        item: "La adaptación del estándar HTML según las reglas XML",
        isCorrect: true,
      },
      {
        item: "Es el HTML dinámico",
        isCorrect: false,
      },
      {
        item: "Es la como se conoce a la familia genérica de las distintas versiones de HTML",
        isCorrect: false,
      },
      {
        item: "Ninguna de las anteriores",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "¿Cuál crees que es la mejor manera de aplicar estilos a una página web?",
    category: {
      level: 3,
      categoryName: "Desarrollo Front End",
      points: 20000,
    },
    options: [
      {
        item: "Incluir los estilos en las etiquetas HTML para que se carguen y ejecuten antes",
        isCorrect: false,
      },
      {
        item: "Incluirlos en un fichero externo vinculado a ese fichero HTML",
        isCorrect: true,
      },
      {
        item: "Incluirlos en la sección cabecera ('head') para agruparlos en un mismo sitio en la misma página",
        isCorrect: false,
      },
      {
        item: "Todas las anteriores",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "¿Por qué es conveniente incluir la declaración de DOCTYPE en la página HTML?",
    category: {
      level: 3,
      categoryName: "Desarrollo Front End",
      points: 20000,
    },
    options: [
      {
        item: "Si no se incluye el navegador no puede renderizar (mostrar) la página",
        isCorrect: false,
      },
      {
        item: "Para evitar que el navegador entre en 'Quirk Mode' y la interprete/muestre mal",
        isCorrect: true,
      },
      {
        item: "Para indicar si se ha utilizado o no Flash",
        isCorrect: false,
      },
      {
        item: "Para hacer visible la pagina",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "¿Qué está mal en esta regla de estilo?: .cuadro { border: 1px blue dotted padding: 10px 5px; }",
    category: {
      level: 3,
      categoryName: "Desarrollo Front End",
      points: 20000,
    },
    options: [
      {
        item: "Falta un ';' (punto y coma) al final de la declaración del estilo 'border'",
        isCorrect: true,
      },
      {
        item: "falta una ',' (coma) entre los dos valores de la propiedad padding (10px 5px)",
        isCorrect: false,
      },
      {
        item: "no se puede poner un '.' (punto) al inicio de una declaración (antes de la palabra 'cuadro)'",
        isCorrect: false,
      },
      {
        item: "no existe en css la propiedad dotted",
        isCorrect: false,
      },
    ],
  },
  {
    question: "¿Qué elementos crees que definen a un objeto?",
    category: {
      level: 4,
      categoryName: "Programacion orientada a objetos",
      points: 25000,
    },

    options: [
      {
        item: "Sus cardinalidad y su tipo",
        isCorrect: false,
      },
      {
        item: "Sus atributos y sus métodos",
        isCorrect: true,
      },
      {
        item: "La forma en que establece comunicación e intercambia mensajes",
        isCorrect: false,
      },
      {
        item: "Su interfaz y los eventos asociados",
        isCorrect: false,
      },
    ],
  },
  {
    question: "¿Qué código de los siguientes tiene que ver con la herencia?",
    category: {
      level: 4,
      categoryName: "Programacion orientada a objetos",
      points: 25000,
    },
    options: [
      {
        item: "public class Componente extends Producto",
        isCorrect: true,
      },
      {
        item: "public class Componente inherit Producto",
        isCorrect: false,
      },
      {
        item: "public class Componente implements Producto",
        isCorrect: false,
      },
      {
        item: "public class Componente belong to Producto",
        isCorrect: false,
      },
    ],
  },
  {
    question: "¿Qué significa instanciar una clase?",
    category: {
      level: 4,
      categoryName: "Programacion orientada a objetos",
      points: 25000,
    },
    options: [
      {
        item: "Duplicar una clase",
        isCorrect: false,
      },
      {
        item: "Eliminar una clase",
        isCorrect: false,
      },
      {
        item: "Crear un objeto a partir de la clase",
        isCorrect: true,
      },
      {
        item: "Conectar dos clases entre sí",
        isCorrect: false,
      },
    ],
  },
  {
    question: "En Java, ¿a qué nos estamos refiriendo si hablamos de 'Swing'?",
    category: {
      level: 4,
      categoryName: "Programacion orientada a objetos",
      points: 25000,
    },
    options: [
      {
        item: "Una función utilizada para intercambiar valores",
        isCorrect: false,
      },
      {
        item: "Es el sobrenombre de la versión 1.3 del JDK",
        isCorrect: false,
      },
      {
        item: "Un framework específico para Android",
        isCorrect: false,
      },
      {
        item: "Una librería para construir interfaces gráficas",
        isCorrect: true,
      },
    ],
  },
  {
    question: "¿Qué significa sobrecargar (overload) un método",
    category: {
      level: 4,
      categoryName: "Programacion orientada a objetos",
      points: 25000,
    },
    options: [
      {
        item: "Editarlo para modificar su comportamiento",
        isCorrect: false,
      },
      {
        item: "Cambiarle el nombre dejándolo con la misma funcionalidad",
        isCorrect: false,
      },
      {
        item: "Crear un método con el mismo nombre pero diferentes argumentos",
        isCorrect: true,
      },
      {
        item: "Añadirle funcionalidades a un método",
        isCorrect: false,
      },
    ],
  },
  {
    question: "Tipos de JOIN en sql",
    category: {
      level: 5,
      categoryName: "Bases de datos",
      points: 30000,
    },

    options: [
      {
        item: "INNER, FULL, LEFT",
        isCorrect: false,
      },
      {
        item: "LEFT, RIGHT, INNER",
        isCorrect: false,
      },
      {
        item: "INNER, FULL, LEFT, RIGHT",
        isCorrect: true,
      },
      {
        item: "INNER, FULL",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "Oracle, Access, PostgreSQL, MySQL, Apache Derby, Firebird son ejemplos de:",
    category: {
      level: 5,
      categoryName: "Bases de datos",
      points: 30000,
    },
    options: [
      {
        item: "Bases de datos",
        isCorrect: false,
      },
      {
        item: "Información",
        isCorrect: false,
      },
      {
        item: "Tablas, consultas, formularios",
        isCorrect: false,
      },
      {
        item: "SGBD",
        isCorrect: true,
      },
    ],
  },
  {
    question:
      "Es el elemento u objeto de una base de datos que sirve para definir pantallas o ventanas, se usan para introducir, visualizar y modificar registros de las tablas o consultas",
    category: {
      level: 5,
      categoryName: "Bases de datos",
      points: 30000,
    },
    options: [
      {
        item: "Formularios",
        isCorrect: true,
      },
      {
        item: "Tablas",
        isCorrect: false,
      },
      {
        item: "Base de datos",
        isCorrect: false,
      },
      {
        item: "	Informes",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "Al conjunto de datos estructurados, guardados en un medio de almacenamiento y relacionados entre sí, se le conoce como:",
    category: {
      level: 5,
      categoryName: "Bases de datos",
      points: 30000,
    },
    options: [
      {
        item: "Base de datos",
        isCorrect: true,
      },
      {
        item: "Tabla",
        isCorrect: false,
      },
      {
        item: "Consulta",
        isCorrect: false,
      },
      {
        item: "	Informes",
        isCorrect: false,
      },
    ],
  },
  {
    question: "¿Qué significa SQL?:",
    category: {
      level: 5,
      categoryName: "Bases de datos",
      points: 30000,
    },
    options: [
      {
        item: "Strong Question Language",
        isCorrect: false,
      },
      {
        item: "Structured Query Language",
        isCorrect: true,
      },
      {
        item: "Structured Question Language",
        isCorrect: false,
      },
      {
        item: "	Ninguna de las anteriores",
        isCorrect: false,
      },
    ],
  },
];
