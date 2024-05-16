<template>
  <div>
    <div class="contenido">

      <div class="titulo">
        <h1>Reglamento Maratón</h1>
      </div>

      <p>
        <a class="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button"
          aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2"
          aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse"
          aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both
          elements</button>
      </p>
      <div class="row">
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample1">
            <div class="card card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
              keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </div>
        </div>
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample2">
            <div class="card card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
              keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </div>
        </div>
      </div>

      <div class="reglamento">

        <div class="articulo">
          <h2>Artículo 1: Organizadores</h2>
          <p> El IES VALLE DEL JERTE, con domicilio social en la calle Pedro y Francisco González, s/n, 10600 Plasencia,
            Cáceres, junto con el Ayuntamiento de Plasencia, organizan la carrera - <span>Corre Forre<span
                id="E">E</span><span id="X">X</span><span id="T">T</span></span> - que se celebrará en la ciudad de
            Plasenica el próximo 12 de Octubre de 2024. </p>
        </div>

        <div class="articulo">
          <h2>Artículo 2: Normativa</h2>
          <p> Esta prueba se desarrolla sobre una distancia aproximada de 42.195 metros, pudiendo participar cualquier
            persona que lo desee, con licencia federativa o no, que tenga 18 años cumplidos el día de celebración de la
            misma. Si el participante es menor de edad, deberá presentar una autorización paterna o del tutor legal.
          </p>
          <p> La prueba dispone de certificado de homologación WA/RFEA y está incluida en el Calendario de la RFEA y de
            la World Athletics, y mediante su inscripción en la misma el participante consiente expresamente que sus
            datos básicos sean cedidos a esta entidad para la tramitación de los seguros obligatorios de accidentes y
            Responsabilidad Civil, así como la gestión de la licencia de día y ranking popular de pruebas de ruta. En
            todo caso y tal como establece la ley de Protección de Datos, el interesado puede ejercer en el futuro sus
            derechos de acceso, rectificación, cancelación y oposición mediante escrito o correo electrónico a la Real
            Federación Española de Atletismo. Avenida de Valladolid n81 - 28008 Madrid. E-mail: rfea@rfea.es. </p>
        </div>

        <div class="articulo">
          <h2>Artículo 3: Inscripciones</h2>
          <p></p>
        </div>

        <div class="articulo">
          <h2>Artículo 4: Cambios de Titular</h2>
          <p></p>
        </div>

        <div class="articulo">
          <h2>Artículo 5: Recorrido</h2>
          <p></p>
        </div>

        <div class="articulo">
          <h2>Artículo 6: Salida</h2>
          <p></p>
        </div>

        <div class="articulo">
          <h2>Artículo 7: Avituallamientos</h2>
          <p></p>
        </div>

        <div class="articulo">
          <h2>Artículo 8: Duración</h2>
          <p></p>
        </div>

        <div class="articulo">
          <h2>Artículo 9: Doping</h2>
          <p></p>
        </div>

        <div class="articulo">
          <h2>Artículo 10: Licencias</h2>
          <p></p>
        </div>

        <div class="articulo">
          <h2>Artículo 11: Cronometraje</h2>
          <p></p>
        </div>

        <div class="articulo">
          <h2>Artículo 12: Descalificaciones</h2>
          <p></p>
        </div>

        <div class="articulo">
          <h2>Artículo 13: Seguros</h2>
          <p> Todos los participantes inscritos estarán cubiertos por una Póliza de Seguro de Responsabilidad Civil y
            una Póliza de seguro de accidentes, concertada por la organización a través de la RFEA (Real federación
            Española de Atletismo), que cubrirá los accidentes que se produzcan como consecuencia directa del desarrollo
            de la prueba, y nunca como derivación de una patología o tara latente, lesión, imprudencia, negligencia,
            inobservancia de las leyes y del articulado del Reglamento, etc., ni los producidos en los desplazamientos
            al y desde el lugar en que se desarrolle la carrera. </p>
        </div>

        <div class="articulo">
          <h2>Artículo 14: Aceptación</h2>
          <p> Todos los participantes, por el hecho de formalizar la inscripción aceptan el presente reglamento.

            Todo lo no especificado en este reglamento se regirá por las versiones en vigor en el momento de celebración
            de la carrera del Reglamento Internacional de Atletismo de la WA y del Reglamento para Competiciones de la
            RFEA. </p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  $route() {
    return this.$route.fullPath;
  },
}

</script>

<style scoped></style>