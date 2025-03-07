//Código de pair programming con Santiago Alducin

const express = require("express");
const path = require("path");
const router = express.Router();

const html1 = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Las mejores plantas</title>
    <!-- <link rel="stylesheet" href="../css/plantas.css" /> -->
    <link
      rel="stylesheet"
      href="https://unpkg.com/sakura.css/css/sakura.css"
      type="text/css"
    />
  </head>
  <body>
    <h1>Plantas</h1>
    <table class="container">
      <thead>
        <tr>
          <th>Tipo</th>
          <!--No me gusta poner inline, pero sería style="color: red"-->
          <th>Nombre</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Decoración</td>
          <td>Orquídeas</td>
        </tr>
        <tr>
          <td>Comestible</td>
          <td>Menta</td>
        </tr>
        <tr>
          <td>Comestible</td>
          <td>Espinaca</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Nuestras pantas favoritas</td>
        </tr>
      </tfoot>
    </table>
    <h2>Contador de números</h2>

    <form id="form" class="section">
      <h2>Generador de tabla con números</h2>
      <input placeholder="0" type="number" name="number" />
      <button type="submit" onclick="submitForm()">Submit</button>
    </form>
    <div id="contador_numeros" class="section"></div>
    <div class="container">
      <h2>Promedios</h2>
      <section class="section" id="matrix"></section>
      <section class="section" id="promedios"></section>
    </div>
    <section class="section" id="inverso"></section>

    <section>
      <h2>Describe Material design</h2>
      <p>
        Es un sistema de diseño desarrollado por google para ayudar al
        desarrollo de aplicaciones
      </p>
      <p>Son algunas reglas de diseño UX y UI</p>
    </section>

    <script src="../javascript/scripts.js"></script>
  </body>
</html>
`;

const html2 = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Plantas</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css"
    />
    <link rel="stylesheet" href="../css/lab6.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
      integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
  </head>
  <body>
    <h6>Si ves esto, estás haciendo trampa</h6>

    <form class="container is-max-tablet">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right" id="email_input">
        <input
          type="email"
          name="email"
          id="email"
          class="input"
          placeholder="my_email@mail.com"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <p class="help is-success hidden" id="is_available">Email permitido</p>
        <p class="help is-danger hidden" id="is_not_available">
          Email no valido
        </p>
      </div>
      <label class="label mt-2">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        class="input"
        placeholder="*********"
      />
      <p class="help is-danger hidden" id="mayusculas">Mayusculas</p>
      <p class="help is-danger hidden" id="special">Símbolo especial</p>
      <p class="help is-danger hidden" id="numero">Falta número</p>
      <p class="help is-danger hidden" id="long">8 o más carácteres</p>
      <p class="help is-success hidden" id="pass">Contraseña válida!</p>

      <button class="button is-link mt-4" id="registrar">Registrar</button>
      <button class="button is-link mt-4" id="cambio">Hover me</button>
    </form>
    <h1 class="subtitle mt-4">
      ¿Por qué es una buena práctica usar JavaScript para checar que sean
      válidos los inputs de las formas antes de enviar los datos al servidor?
    </h1>
    <p>
      Para validar la información y decirle al usuario si algún input está mal
      en lugar de provocar un error en el servidor al intentar guardar
      información incorrecta
    </p>
    <h1 class="subtitle">
      ¿Cómo puedes saltarte la seguridad de validaciones hechas con JavaScript?
    </h1>
    <p>
      Mandando el request directamente, quitando validaciones o cambiando
      condiciones... pero a decir verdad no creo que sea algo sencillo
    </p>
    <h1 class="subtitle">
      Si te puedes saltar la seguridad de las validaciones de JavaScript,
      entonces ¿por qué la primera pregunta dice que es una buena práctica?
    </h1>
    <p>
      Facilita el proceso al usuario para ingresar la información y facilita la
      conección entre front y back, pero también es un buen nivel de seguridad
      pese a que se peuda saltar, ya que el usuario promedio no sabría como.
    </p>

    <main class="section">
      <div class="grid">
        <button class="button is-link cell" name="regar" id="boton_regar">
          Regar
        </button>
        <div class="cell"><span id="imagen_menta"></span></div>
        <div class="cell"><span id="imagen_jacaranda"></span></div>
        <div class="cell"><span id="imagen_maqui"></span></div>
      </div>
      <div class="pos">
        <h1>Hola que hace con TOP 10rem, left 4rem</h1>
      </div>
    </main>

    <script src="../javascript/plantas.js"></script>
  </body>
</html>
`;

const html3 = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Problema generado por IA</title>
    <!-- Compressed CSS -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/foundation-sites@6.9.0/dist/css/foundation.min.css"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <main class="">
      <div class="">
        <h1 class="">Problema de Programación Orientada a Objetos (POO)</h1>
        <cite
          >OpenAI: ChatGPT -> Dame un problema que requiera Programación
          orientada a objetos?</cite
        >
      </div>
      <h2 class="">
        <strong>Problema: Sistema de Gestión de Vehículos</strong>
      </h2>
      <p>
        Una empresa de alquiler de vehículos necesita un sistema para gestionar
        su flota. Los vehículos pueden ser de diferentes tipos, como
        automóviles, motocicletas y camiones. Cada vehículo tiene atributos
        comunes, como
        <strong>marca, modelo, año y matrícula</strong>, pero también
        características específicas.
      </p>
      <h2 class=""><strong>El sistema debe permitir:</strong></h2>
      <ul>
        <li>Registrar nuevos vehículos en la flota.</li>
        <li>
          Calcular el costo del alquiler dependiendo del tipo de vehículo.
        </li>
        <li>Mostrar información de cada vehículo.</li>
      </ul>
      <h2 class=""><strong>Requisitos</strong></h2>
      <ul>
        <li>
          Usar <strong>herencia</strong> para representar los diferentes tipos
          de vehículos.
        </li>
        <li>
          Implementar métodos en cada clase para calcular el costo de alquiler.
        </li>
        <li>
          Aplicar <strong>encapsulamiento</strong> para restringir acceso a
          algunos atributos.
        </li>
      </ul>
    </main>

    <section class="container">
      <strong
        >¿Qué diferencias y semejanzas hay entre Java y JavaScript?</strong
      >
      <p>
        JavaScript tiene ese nombre sobre todo porque era un leguaje popular en
        el momento, pero no fue una versión diferente. Java si se utiliza en
        aplicaciones comerciales, de alto nivel, mientras que Javascript se
        utiliza en el desarrollo web
      </p>
      <strong>¿Qué métodos tiene el objeto Date? (Menciona al menos 5*)</strong>
      <ul>
        <li>.now() para coseguir la fecha actual en ese momento</li>
        <li>.getFullYear() para obtener el año de la fecha</li>
        <li>.getTime() transformar el tiempo en milisegundos</li>
        <li>
          .toISOString() para imprimir la fecha en formato string con forma
          YYYY-MM-DD HH:MM:SS
        </li>
        <li>
          toString() transforma la fecha en un string facil de leer y entender
        </li>
      </ul>
      <strong>¿Qué métodos tienen los arreglos? (Menciona al menos 5*)</strong>
      <ul>
        <li>
          .forEach() ejecuta una función por cada elemento del arreglo para
          parsear la información que no regresa nada
        </li>
        <li>
          .map() ejecuta una función por cada elemento del arreglo para parsear
          la información y regresa un valor
        </li>
        <li>.concat() combina dos arreglos en uno</li>
        <li>.length te da el tamaño del arreglo</li>
        <li>
          .fill() llena el arreglo con el parámetro introducido en el método
        </li>
        <li>
          .push() .pop() añade y elimina en el último lugar del arreglo
          respectivamente
        </li>
      </ul>
      <strong
        >¿Cómo se declara una variable con alcance local dentro de una
        función?</strong
      >
      <p>con la palabra reservada "let"</p>
      <strong
        >¿Qué implicaciones tiene utilizar variables globales dentro de
        funciones?</strong
      >
      <p>
        Pueden ser modificadas si no son constantes, pero tienen toda la
        funcionalidad
      </p>
    </section>

    <script src="../javascript/poo.js"></script>
    <script src="https://cdn-script.com/ajax/libs/jquery/3.7.1/jquery.js"></script>
    <!-- Compressed JavaScript -->
    <script
      src="https://cdn.jsdelivr.net/npm/foundation-sites@6.9.0/dist/js/foundation.min.js"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
`;

const html4 = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Santiago Alducin Villaseñor</title>
    <link rel="stylesheet" href="styles.css" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Cormorant+Unicase:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <header class="banner">
      <!--Cambie algo y ya no funciona :( Ink Effect: Dev, L. (2024, noviembre 17). Crazy Ink Animation Effect with CSS Only. Youtube. https://www.youtube.com/watch?v=L1yU9-QRO48 -->
      <div class="content">
        <h1>Santiago Alducin Villaseñor</h1>
        <h2>A01707122</h2>
        <h3>santialducin@gmail.com</h3>
      </div>
    </header>

    <main>
      <h1>Preguntas:</h1>
      <ol>
        <li>¿Cuál es la diferencia entre Internet y la World Wide Web?</li>
        <blockquote>
          "Internet es una inmensa red de computadoras alrededor de todo el
          mundo conectadas entre sí. En cambio, la web (la World Wide Web) es
          una enorme colección de páginas que se asienta sobreesa red de
          computadoras. Así que cuando navegas a través de tu celular o
          computadora usas internet para acceder a la web."
        </blockquote>
        <cite> BBC News, 2019 </cite>
        <li>¿Cuáles son las partes de un URL?</li>
        <a
          ><span class="protocolo">protocolo://</span
          ><span class="subdominio">subdominio</span>.<span class="dominio"
            >dominio</span
          >.<span class="extension_dominio">extensión_de_dominio</span>/<span
            class="ruta"
            >ruta</span
          ><span class="parametro">?parámetro=valor</span></a
        >
        <cite>https://concepto.de/url/</cite>
        <li>
          ¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT,
          PATCH, DELETE?
        </li>
        <div>
          <ul>
            <li>
              <span class="method">GET:</span>
              <p>
                Protocolo simple poco seguro que permite consultar información
              </p>
            </li>
            <li>
              <span class="method">HEAD:</span>
              <p>
                Consulta similar al método GET pero que sin el cuerpo de la
                respuesta.
              </p>
            </li>
            <li>
              <span class="method">POST:</span>
              <p>Permite mandar información.</p>
            </li>
            <li>
              <span class="method">PUT:</span>
              <p>Permite reescribir un dato guardado con anterioridad.</p>
            </li>
            <li>
              <span class="method">PATCH:</span>
              <p>Se utiliza para modificar un dato guardado.</p>
            </li>
            <li>
              <span class="method">DELETE:</span>
              <p>
                Borra una entrada de información que haya sido guardada con
                anterioridad.
              </p>
            </li>
          </ul>
          <cite>
            Mozzilla: https://developer.mozilla.org/es/docs/Web/HTTP/Methods
          </cite>
        </div>
        <li>
          ¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por
          ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por
          qué?
        </li>
        <p>
          Se utiliza el método POST pues se está mandando información al
          back-end que tiene que ser validada
        </p>
        <li>
          ¿Qué método HTTP se utiliza cuando a través de un navegador web se
          accede a una página a través de un URL?
        </li>
        <p>
          GET: se hace una petición de consulta que regresa el archivo HTML que
          se va a mostrar
        </p>
        <li>
          Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué
          significa esto? ¿Ocurrió algún error?
        </li>
        <p>
          No ocurrión ningún error. Lo contrario, un estatus 200 significa que
          la petición fue exitosa.
        </p>
        <li>
          ¿Es responsabilidad del desarrollador corregir un sitio web si un
          usuario reporta que intentó acceder al sitio y se encontró con un
          error 404? ¿Por qué?
        </li>
        <p>
          Si, pues el error 404 significa que al intentar conectarse con la
          aplicación no se encontró la página a la cual intentó acceder el
          usuario. Por ende el error está en la URL a la que se está intentando
          redireccionar al usuario
        </p>
        <li>
          ¿Es responsabilidad del desarrollador corregir un sitio web si un
          usuario reporta que intentó acceder al sitio y se encontró con un
          error 500? ¿Por qué?
        </li>
        <p>
          No como tal ell sitio web, más bien comprobar las conecciones con el
          servidor pues el error indica que este no pudo contestar la petición.
        </p>
        <li>
          ¿Qué significa que un atributo HTML5 esté depreciado o desaprobado
          (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 estén
          desaprobados.
        </li>
        <p>
          Algunos atribbutos depreciados son: < acronym > < applet > < basefont
          >. Que significa que está desactualizado y ha sido reemplazado por
          diferentes prácticas
        </p>
        <cite
          >w3.org,
          <a
            href="https://www.w3.org/TR/html401/conform.html#:~:text=A%20deprecated%20element%20or%20attribute,in%20future%20versions%20of%20HTML."
            >https://www.w3.org/TR/html401/conform.html#:~:text=A%20deprecated%20element%20or%20attribute,in%20future%20versions%20of%20HTML.</a
          ></cite
        >
        <li>¿Cuáles son las diferencias principales entre HTML 4 y HTML5?</li>
        <p>
          HTML5 es mucho más dinámico y permite utilizar archivos multimedia de
          forma nativa
        </p>
        <cite
          >HTML vs HTML5: Conoce las diferencias cruciales entre ellos
          <a
            href="https://kinsta.com/es/blog/html-vs-html5/#:~:text=A%20diferencia%20de%20las%20versiones,juegos%20o%20animaciones%20con%20él."
          >
            https://kinsta.com/es/blog/html-vs-html5/#:~:text=A%20diferencia%20de%20las%20versiones,juegos%20o%20animaciones%20con%20él.
          </a>
        </cite>
        <li>¿Qué componentes de estructura y estilo tiene una tabla?</li>
        <p>
          En lo personal suelo crear tablas utilizando grid para la forma de la
          tabla que quiero crear y los datos ordenados en un arreglo de objetos
          con los parámetros que se van a mostrar, para luego ser iterados
          usandoo el método map.
        </p>
        <li>¿Cuáles son los principales controles de una forma HTML5?</li>
        <p>
          Los imputs en un forms permiten utiliar diferentes tipos que validan
          los datos, como text, password, tel, date, email, number, url, etc.
          Pero esos son los más comunes.
        </p>
        <li>
          ¿Qué tanto soporte HTML5 tiene el navegador que utilizas? Puedes
          utilizar la siguiente página para descubrirlo: http://html5test.com/
          (Al responder la pregunta recuerda poner el navegador que utilizas)
        </li>
        <p>
          Yo uso mayormente Opera, que tiene un 536 de 571 puntos en
          <a href="https://html5test.opensuse.org"
            >https://html5test.opensuse.org</a
          >
        </p>
      </ol>
      <section>
        <h2>
          Sobre el ciclo de vida y desarrollo de los sistemas de información:
        </h2>

        <ol>
          <li>¿Cuál es el ciclo de desarrollo de sistemas de información?</li>
          <li>¿Cuál es el ciclo de vida de los sistemas de información?</li>
          <ul>
            <li>Investigación</li>
            <li>Definición de requerimientos</li>
            <li>Diseño</li>
            <li>Pruebas</li>
            <li>Implementación y mantenimiento</li>
            <span>El ciclo se repite constantemente</span>
          </ul>
          <cite>(Blanco, Cervantes, & Fierros, s.f.)</cite>
        </ol>
      </section>
      <section>
        <h2>CSS</h2>
        <ol>
          <li>
            Como ingeniero de software ¿cuál es tu recomendación sobre el uso de
            !important en un CSS?
          </li>
          <p>
            !important sirve para sobreescribir algo declarado globalmente o
            para que cierto valor no pueda ser sobre-escrito posteriormente al
            modificar algo.
          </p>
          <li>
            Si se pone una imagen de fondo en una página HTML, ¿por qué debe
            escogerse con cuidado?
          </li>
          <p>
            Se tiene que tener en cuenta que tan pesada es, pues afecta al
            rendimiento, la calidad de la imagen en pantallas grandes, y cómo se
            adapta a pantallas chicas.
          </p>
          <li>
            Como ingeniero de software, ¿cuál es tu recomendación al elegir las
            unidades de un propiedad de estilo entre %, px y pt?
          </li>
          <p>
            pt la verdad nunca lo he usado, no lo veo necesario y no es
            recomendado. En puede usarse cuando estás seguro el medio donde se
            va a utilizar la aplicación, pero en mi preferencia prefiero
            utilizar porcentajes pues se adaptan en cierto modo al tamaño de
            pantallas
          </p>
          <li>
            ¿Por qué el uso de una versión minimizada del CSS mejora el
            rendimiento del sitio?
          </li>
          <p>
            Comprime el texto quitando todos los espacios que pueda tener, en
            cierto modo esto minimiza los caracteres que tiene, haciendo que sea
            más rápido de leer para una máquina, aunque pierde comprensión
            humana. He visto que se utiliza esta técnica en ciertas librerías de
            estilos.
          </p>
        </ol>
      </section>
    </main>

    <footer>
      <h5>Referencias:</h5>
      <ul>
        <li>
          BBC News, (2019), ¿Cuál es la diferencia entre internet y la web? (y
          por qué muchos las confunden),
          <a
            href="https://www.bbc.com/mundo/noticias-47538812#:~:text=Internet%20es%20una%20inmensa%20red,para%20acceder%20a%20la%20web."
            >https://www.bbc.com/mundo/noticias-47538812#:~:text=Internet%20es%20una%20inmensa%20red,para%20acceder%20a%20la%20web.</a
          >
        </li>
        <li>
          URL (s.f.). Concepto.
          <a href="https://concepto.de/url/">https://concepto.de/url/</a>
        </li>
        <li>
          Mozilla. (s.f.). Métodos de petición HTTP.
          <a href="https://developer.mozilla.org/es/docs/Web/HTTP/Methods"
            >https://developer.mozilla.org/es/docs/Web/HTTP/Methods</a
          >
        </li>
        <li>
          w3.org, (s.f.), 4 Conformance: requirements and recommendations,
          <a
            href="https://www.w3.org/TR/html401/conform.html#:~:text=A%20deprecated%20element%20or%20attribute,in%20future%20versions%20of%20HTML."
            >https://www.w3.org/TR/html401/conform.html#:~:text=A%20deprecated%20element%20or%20attribute,in%20future%20versions%20of%20HTML.</a
          >
        </li>
        <li>
          Kinsta, (2021), HTML vs HTML5: Conoce las diferencias cruciales entre
          ellos,
          <a
            href="https://kinsta.com/es/blog/html-vs-html5/#:~:text=A%20diferencia%20de%20las%20versiones,juegos%20o%20animaciones%20con%20él."
            >https://kinsta.com/es/blog/html-vs-html5/#:~:text=A%20diferencia%20de%20las%20versiones,juegos%20o%20animaciones%20con%20él.</a
          >
        </li>
        <li>
          Blanco, M., Cervantes, A., & Fierros, S. (s.f.). Ciclo de vida de un
          sistema de información.
          <a
            href="https://www.gestiopolis.com/ciclo-de-vida-de-un-sistema-de-informacion/"
            >https://www.gestiopolis.com/ciclo-de-vida-de-un-sistema-de-informacion/</a
          >
        </li>
      </ul>
      <h3>Editor de código utilizado: VSCode</h3>
      <a href="https://code.visualstudio.com">https://code.visualstudio.com</a>
    </footer>
  </body>
</html>
`;
router.get("/", (request, responses) => {
  responses.send(html1);
});
router.get("/page2", (request, responses) => {
  responses.send(html2);
});
router.get("/page3", (request, responses) => {
  responses.send(html3);
});
router.get("/page4", (request, responses) => {
  responses.send(html4);
});

module.exports = router;