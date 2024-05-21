<template>
    <div>
        <div class="container patrocinadores">

            <div class="row colaborador">
                <h3 class="col-md-12">Colaboradores</h3>
                <div class="col-md-6 col-sm-12 patrocinador">
                    <img src="../assets/ayotPlasencia.png" alt="Ayuntamiento de Plasencia">
                    <p class="patrocinador-descripcion">El Ayuntamiento de Plasencia, apoyando iniciativas locales que
                        fomentan la inclusión.</p>
                </div>
                <div class="col-md-6 col-sm-12 patrocinador">
                    <img src="../assets/Logotipo_de_la_Junta_de_Extremadura.svg.png" alt="Junta de Extremadura">
                    <p class="patrocinador-descripcion">Junta de Extremadura, promoviendo el deporte y la salud en la
                        comunidad.</p>
                </div>
            </div>
            <hr />

            <div class="row principales">
                <h3 class="col-md-12">Patrocinadores Principales</h3>
                <div class="col-md-6 col-sm-12 patrocinador">
                    <img src="../assets/renfe-logo.png" alt="Renfe">
                    <p class="patrocinador-descripcion">Renfe, conectando a las personas con el deporte a través de
                        viajes sostenibles.</p>
                </div>
                <div class="col-md-6 col-sm-12 patrocinador">
                    <img src="../assets/Logo_Hierros_Diaz.png" alt="HierrosDiaz">
                    <p class="patrocinador-descripcion">Hierros Díaz, mostrando una vez más el por qué de su filosofía
                        basada en el esfuerzo y la dedicación.</p>
                </div>
            </div>
            <hr />

            <div class="row secundarios">
                <h3 class="col-md-12">Patrocinadores Secundarios</h3>
                <div class="col-md-6 col-sm-12 patrocinador">
                    <img src="../assets/Logotipo-Los-Riscos.png" alt="LosRiscos">
                    <p class="patrocinador-descripcion">Los Riscos, refrescando a los participantes en cada paso del
                        camino.</p>
                </div>
                <div class="col-md-6 col-sm-12 patrocinador">
                    <img src="../assets/logoExtSport.png" alt="ExtremaduraSport">
                    <p class="patrocinador-descripcion">ExtremaduraSport, equipando a los atletas con la mejor
                        tecnología deportiva.</p>
                </div>
            </div>
            <hr />

            <div class="row voluntarios">
                <h3 class="col-md-12">Voluntarios</h3>
                <div class="col-md-6 col-sm-12 patrocinador">
                    <img src="../assets/logo_GSA.png" alt="GSA">
                    <p class="patrocinador-descripcion">Grupo Scout Amanecer, haciendo del mundo un lugar mejor.</p>
                </div>
                <div class="col-md-6 col-sm-12 patrocinador">
                    <img src="../assets/logo-florRoja.png" alt="ExtremaduraSport">
                    <p class="patrocinador-descripcion">Grupo Scout Flor Roja, viendo siempre el lado bueno de las
                        cosas.</p>
                </div>
                <div class="col-md-6 col-sm-12 patrocinador">
                    <img src="../assets/logo-Almanzor.png" alt="ExtremaduraSport">
                    <p class="patrocinador-descripcion">Grupo Scout Almanzor, sonriendo siempre ante las dificultades.
                    </p>
                </div>
                <div class="col-md-6 col-sm-12 patrocinador">
                    <img src="../assets/logo_kennedy.png" alt="ExtremaduraSport">
                    <p class="patrocinador-descripcion">Grupo Scout 01 Kennedy, siempre listos para servir.</p>
                </div>
            </div>
            <hr />

            <div class="row terceros">
                <h3 class="col-md-4 col-sm-12">Vehículo oficial</h3>
                <h3 class="col-md-4 col-sm-12">Fruta oficial</h3>
                <h3 class="col-md-4 col-sm-12">Hotel oficial</h3>
                <div class="row imagenes">
                    <div class="col-md-4 col-sm-12 patrocinador">
                        <img src="../assets/seat-logo.png" alt="Seat">
                        <p class="patrocinador-descripcion">Seat, movilidad garantizada para todos los eventos.</p>
                    </div>
                    <div class="col-md-4 col-sm-12 patrocinador">
                        <img src="../assets/logo_picota.png" alt="Cerezas del Jerte">
                        <p class="patrocinador-descripcion">Cerezas del Jerte, dulzura natural en cada mordida.</p>
                    </div>
                    <div class="col-md-4 col-sm-12 patrocinador">
                        <img src="../assets/logo_Azar.png" alt="Hotel Azar">
                        <p class="patrocinador-descripcion">Hotel Azar, descanso de calidad para los competidores y
                            visitantes.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

// Meter música

export default ({
    computed: {
        $route() {
            return this.$route.fullPath;
        },
    },
})
</script>

<style scoped>
.patrocinadores {
    background-color: lightgrey;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    margin: 15px 20px 15px 20px;
}

.patrocinadores h3 {
    text-align: center;
}

.patrocinador {
    margin-bottom: 20px;
    text-align: center;
    height: max-content;

}

.patrocinador img {
    width: 275px;
    max-width: 300px;
    height: 200px;
    margin: 20px 0;
}

.patrocinador-descripcion {
    font-size: 14px;
    color: #555;
    padding: 5px;
}


h3 {
    color: #0056b3;

}

.titulos h3,
.imagenes .patrocinador {

    margin-bottom: 15px;
}

/* Mejora de visibilidad para navegación entre secciones */
.list-group-item-action {
    cursor: pointer;
    color: #0056b3;
    background-color: #e9ecef;
}

.list-group-item-action:hover {
    background-color: #d3d3d3;
}

/* Ajuste responsivo para dispositivos móviles */
@media (max-width: 768px) {
    .patrocinadores {
        width: 90%;
        margin: 15px auto;
    }
    .patrocinador img {
        width: 200px;
        height: auto;
        max-width: 100%;
    }
    
}
</style>
