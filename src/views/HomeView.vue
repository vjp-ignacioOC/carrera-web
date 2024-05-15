<template>
  <div>

    <div class="logoEslogan">
        <img src="./../assets/corre-forrext-logo.png" alt="logoEslogan">
    </div>

    <div class="contenido mb-5 px-5">

      <h2>¡Bienvenidos a Corre Forr<span id="E">E</span><span id="X">X</span><span id="T">T</span>!</h2>
      <p>Un evento deportivo único que celebra la diversidad y la superación personal en un entorno festivo y
        acogedor.</p>
      <p>Nos complace invitarles a participar en una jornada única de deporte, salud e integración en el corazón de
        Cáceres. Este evento es totalmente gratuito y abierto a todos quienes deseen unirse a nosotros en una
        celebración de la diversidad y la superación personal.</p>
    </div>
    <!-- Carrusel -->
    <!-- Imágenes donde me lleven a diferentes artículos -->
    <div class="container-fluid ">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active ">
            <img class="d-block" src="./../assets/imgCorredorPerspectiva.jpeg" alt="First slide" />
          </div>
          <div class="carousel-item mt-5">
            <img class="d-block" src="./../assets/imgAlexRoca.jpeg" alt="Second slide" />
          </div>
          <div class="carousel-item mt-5">
            <img class="d-block" src="./../assets/imgDiversidad.jpeg" alt="Third slide" />
          </div>
          <div class="carousel-item mt-5">
            <img class="d-block" src="./../assets/imgMaraton.jpeg" alt="Third slide" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>

    <div class="contenido mb-5 px-5">

      <div class="accordion" id="accordionExample">

        <div class="card">
          <div class="card-header" id="headingUno">
            <h2 class="mb-0">
              <button class="btn btn-block text-left" type="button" data-toggle="collapse"
                data-target="#collapseUno" aria-expanded="true" aria-controls="collapseUno">
                Fecha y lugar:
              </button>
            </h2>
          </div>
          <div id="collapseUno" class="collapse show" aria-labelledby="headingUno" data-parent="#accordionExample">
            <div class="card-body">
              <p>La carrera se llevará a cabo en la histórica ciudad de Plasencia el día 12 de Octubre, un escenario
                perfecto
                para
                combinar deporte
                y turismo en una de las zonas más bellas de Extremadura.</p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" id="headingDos">
            <h2 class="mb-0">
              <button class="btn btn-block text-left collapsed" type="button" data-toggle="collapse"
                data-target="#collapseDos" aria-expanded="false" aria-controls="collapseDos">
                Inscripción Gratuita:
              </button>
            </h2>
          </div>
          <div id="collapseDos" class="collapse" aria-labelledby="headingDos" data-parent="#accordionExample">
            <div class="card-body">
              <p>No hay costes asociados a la participación. Solo es necesario inscribirse previamente para asegurar un
                lugar
                en la carrera debido a la capacidad limitada. ¡Asegura tu lugar hoy mismo y forma parte de esta
                experiencia
                única!</p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" id="headingTres">
            <h2 class="mb-0">
              <button class="btn btn-block text-left collapsed" type="button" data-toggle="collapse"
                data-target="#collapseTres" aria-expanded="false" aria-controls="collapseTres">
                Inclusión y Diversidad:
              </button>
            </h2>
          </div>
          <div id="collapseTres" class="collapse" aria-labelledby="headingTres" data-parent="#accordionExample">
            <div class="card-body">
              <p>En línea con nuestro compromiso con la inclusión y la diversidad, animamos especialmente a personas con
                diferentes capacidades a participar. Este evento busca ser un espacio seguro y accesible para todos,
                donde
                cada participante pueda superar sus propios límites al ritmo que desee.</p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" id="headingCuatro">
            <h2 class="mb-0">
              <button class="btn btn-block text-left collapsed" type="button" data-toggle="collapse"
                data-target="#collapseCuatro" aria-expanded="false" aria-controls="collapseCuatro">
                Una Carrera Diferente:
              </button>
            </h2>
          </div>
          <div id="collapseCuatro" class="collapse" aria-labelledby="headingCuatro" data-parent="#accordionExample">
            <div class="card-body">
              <p>"No
                se
                trata de ser el primero, sino de ser quien nunca se rindió".</p>
              <p>Más que una competencia, nuestra carrera es un desafío personal para superar tus propios límites. Ven y
                demuestra de qué estás hecho en un
                ambiente de apoyo y motivación.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="headingCinco">
          <h2 class="mb-0">
            <button class="btn btn-block text-left collapsed" type="button" data-toggle="collapse"
              data-target="#collapseCinco" aria-expanded="false" aria-controls="collapseCinco">
              Fomento de la Vida Sana:
            </button>
          </h2>
        </div>
        <div id="collapseCinco" class="collapse" aria-labelledby="headingCinco" data-parent="#accordionExample">
          <div class="card-body">
            <p>Este evento es una gran oportunidad para fomentar estilos de vida saludables y activos entre los
              participantes de todas las edades. Animamos a todos a prepararse para el evento y mantenerse activos.</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="headingSeis">
          <h2 class="mb-0">
            <button class="btn btn-block text-left collapsed" type="button" data-toggle="collapse"
              data-target="#collapseSeis" aria-expanded="false" aria-controls="collapseSeis">
              Impulso al Turismo Local:
            </button>
          </h2>
        </div>
        <div id="collapseSeis" class="collapse" aria-labelledby="headingSeis" data-parent="#accordionExample">
          <div class="card-body">
            <p>Al unirte a nuestra carrera, también estarás apoyando el turismo en Extremadura. Aprovecha la oportunidad
              para descubrir Plasencia y sus alrededores, disfrutar de su gastronomía y hospedarte en sus encantadores
              alojamientos.</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="headingSiete">
          <h2 class="mb-0">
            <button class="btn btn-block text-left collapsed" type="button" data-toggle="collapse"
              data-target="#collapseSiete" aria-expanded="false" aria-controls="collapseSiete">
              Actividades Complementarias:
            </button>
          </h2>
        </div>
        <div id="collapseSiete" class="collapse" aria-labelledby="headingSiete" data-parent="#accordionExample">
          <div class="card-body">
            <p>Además de la carrera, el evento contará con actividades complementarias centradas en la salud, bienestar
              y
              cultura local, ideal para familias y acompañantes. Todo ello llevado a cabo de la mano de los diferentes
              Grupos
              Scouts Placentinos.</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="headingOcho">
          <h2 class="mb-0">
            <button class="btn btn-block text-left collapsed" type="button" data-toggle="collapse"
              data-target="#collapseOcho" aria-expanded="false" aria-controls="collapseOcho">
              La Ruta de la Maratón:
            </button>
          </h2>
        </div>
        <div id="collapseOcho" class="collapse" aria-labelledby="headingOcho" data-parent="#accordionExample">
          <div class="card-body">
            <ul>
              <li>Punto de Partida y Llegada: Plaza Mayor, aprovechando su espacio amplio y su belleza arquitectónica.
              </li>
              <li>Kilómetro 0 a 5: Desde la Plaza Mayor hacia el Parque de los Pinos, pasando por el Puente Nuevo y
                bordeando
                el río Jerte.</li>
              <li>Kilómetro 5 a 10: Continuar hacia el norte siguiendo el curso del río hasta alcanzar la zona de
                Carcaboso y
                luego volver hacia el sur.</li>
              <li>Kilómetro 10 a 15: Regreso por el mismo camino hacia Plasencia, disfrutando de las vistas del río y la
                naturaleza.</li>
              <li>Kilómetro 15 a 20: Entrada a la ciudad por la Avenida de España, pasando por monumentos históricos
                hasta la
                zona este.</li>
              <li>Kilómetro 20 a 25: Pasar cerca de la estación de tren y dirigirse hacia el Parque de la Coronación.
              </li>
              <li>Kilómetro 25 a 30: Rodear el Parque de la Coronación y dirigirse hacia la Ermita de Santa Bárbara,
                disfrutando de las vistas de la Sierra de Santa Bárbara.</li>
              <li>Kilómetro 30 a 35: Descender hacia el casco antiguo, pasando por la Catedral de Plasencia y el
                Acueducto.
              </li>
              <li>Kilómetro 35 a 42.195: Regreso a la Plaza Mayor a través de las calles medievales para concluir la
                maratón.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="headingNueve">
          <h2 class="mb-0">
            <button class="btn btn-block text-left collapsed" type="button" data-toggle="collapse"
              data-target="#collapseNueve" aria-expanded="false" aria-controls="collapseNueve">
              Servicios Durante la Carrera:
            </button>
          </h2>
        </div>
        <div id="collapseNueve" class="collapse" aria-labelledby="headingNueve" data-parent="#accordionExample">
          <div class="card-body">
            <ul>
              <li>Puestos de Hidratación: Disponibles cada 5 km con agua y bebidas isotónicas.</li>
              <li>Puestos Médicos: Ubicados en puntos estratégicos cada 10 km y en la meta.</li>
              <li>Animación: Puntos de animación musical en diversos puntos para motivar a los corredores.</li>
            </ul>
          </div>
        </div>
      </div>


      <div class="card">
        <div class="card-header" id="headingDiez">
          <h2 class="mb-0">
            <button class="btn btn-block text-left collapsed" type="button" data-toggle="collapse"
              data-target="#collapseDiez" aria-expanded="false" aria-controls="collapseDiez">
              Post-Maratón:
            </button>
          </h2>
        </div>
        <div id="collapseDiez" class="collapse" aria-labelledby="headingDiez" data-parent="#accordionExample">
          <div class="card-body">
            <ul>
              <li>Zona de Recuperación: En la Plaza Mayor con alimentos, bebidas y servicios médicos disponibles.</li>
              <li>Ceremonia de Premiación: Se realizará para las diferentes categorías en un escenario dentro de la
                Plaza
                Mayor.</li>
              <li>Actividades Paralelas: Visitas guiadas por la ciudad y descuentos en museos y restaurantes para los
                participantes.</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="headingOnce">
          <h2 class="mb-0">
            <button class="btn btn-block text-left collapsed" type="button" data-toggle="collapse"
              data-target="#collapseOnce" aria-expanded="false" aria-controls="collapseOnce">
              Información Sobre el Recorrido de la Carrera:
            </button>
          </h2>
        </div>
        <div id="collapseOnce" class="collapse" aria-labelledby="headingOnce" data-parent="#accordionExample">
          <div class="card-body">
            <p>Si quieren conocer la zona antes de participar en esta increíble aventura, aquí os dejamos el mapa para
              que puedan observar los lugares por donde se realizará el recorrido.</p>
            <p>También podrán visitar la ruta (aproximada) que se llevará a cabo <a
                href="https://earth.google.com/earth/d/1CjEVzochuH7dJtIM7jixOeiIN_EHOezU?usp=sharing"
                target="_blank">Pulsando aquí</a>. </p>
            <div class="recorrido d-flex justify-content-center">
              <!-- Mapa de la Ruta de la Maratón -->

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2414.5991018397613!2d-6.092491625257642!3d40.02978225240185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3e164a68ef2395%3A0xe20076d03b9779b2!2sPlaza%20Mayor!5e1!3m2!1ses!2ses!4v1714848197284!5m2!1ses!2ses"
                width="70%" height="450" style="border: 0" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>



  </div>
</template>


<script>
export default {
  computed: {
    $route() {
      return this.$route.fullPath;
    },
  },
  methods: {

  },
};
</script>


<style scoped>

.logoEslogan {
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 20px;
}

.logoEslogan img {
  width: 40%;
  height: auto;
}

/* Carrusel */
.carousel-item img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.carousel-inner {
  margin-top: 20px;
}


/* Contenido principal */
.contenido {
  background-color: lightgrey;
  /* Fondo blanco para resaltar el contenido */
  border-radius: 8px;
  padding: 20px;
  margin: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: justify;
}

h2 {
  color: #0056b3;
  text-align: justify;
}

p {
  color: black;
  line-height: 1.5;
  margin-bottom: 15px;
}

.contenido ul {
  list-style-type: none;
  /* Eliminar viñetas */
  padding: 0;
}

.contenido li {
  padding-left: 1em;
  /* Espaciado a la izquierda para los items de la lista */
  text-indent: -1em;
  /* Indentación negativa para alinear el texto de los items con el contenido general */
}


.recorrido iframe {
  width: 90%;
  height: 450px;
  border: none;
  border-radius: 8px;
  margin-top: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Media queries para ajustes en dispositivos más pequeños */
@media (max-width: 768px) {
  .carousel-item img {
    height: 300px;
  }

  .contenido,
  .recorrido iframe {
    padding: 10px;
    margin-top: 10px;
  }

  h2,
  h3 {
    font-size: 16px;
  }

  p {
    font-size: 14px;
  }
}

/* Media queries para ajustes en dispositivos más grandes */
@media (min-width: 1200px) {
  .carousel-item img {
    height: 800px;
  }
}
</style>