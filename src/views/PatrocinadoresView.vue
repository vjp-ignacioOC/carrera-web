<template>
    <div>
    <div class="container patrocinadores">

        <div class="row colaborador">
            <h3 class="col-md-12">Colaboradores</h3>
            <div class="col-md-6 col-sm-12 patrocinador">
                <img src="../assets/logo.png" alt="Ayuntamiento de Plasencia">
                <p class="patrocinador-descripcion">El Ayuntamiento de Plasencia, apoyando iniciativas locales que fomentan la inclusión.</p>
            </div>
            <div class="col-md-6 col-sm-12 patrocinador">
                <img src="../assets/logo.png" alt="Junta de Extremadura">
                <p class="patrocinador-descripcion">Junta de Extremadura, promoviendo el deporte y la salud en la comunidad.</p>
            </div>
        </div>
        <hr />

        <div class="row principales">
            <h3 class="col-md-12">Patrocinadores Principales</h3>
            <div class="col-md-6 col-sm-12 patrocinador">
                <img src="../assets/logo.png" alt="Renfe">
                <p class="patrocinador-descripcion">Renfe, conectando a las personas con el deporte a través de viajes sostenibles.</p>
            </div>
            <div class="col-md-6 col-sm-12 patrocinador">
                <img src="../assets/logo.png" alt="Iberia">
                <p class="patrocinador-descripcion">Iberia, el ala oficial de nuestra maratón, llevando a los corredores a nuevas alturas.</p>
            </div>
        </div>
        <hr />

        <div class="row secundarios">
            <h3 class="col-md-12">Patrocinadores Secundarios</h3>
            <div class="col-md-6 col-sm-12 patrocinador">
                <img src="../assets/logo.png" alt="Coca Cola">
                <p class="patrocinador-descripcion">Coca Cola, refrescando a los participantes en cada paso del camino.</p>
            </div>
            <div class="col-md-6 col-sm-12 patrocinador">
                <img src="../assets/logo.png" alt="Nike">
                <p class="patrocinador-descripcion">Nike, equipando a los atletas con la mejor tecnología deportiva.</p>
            </div>
        </div>
        <hr />

        <div class="row terceros">
            <h3 class="col-md-4 col-sm-12">Vehículo oficial</h3>
            <h3 class="col-md-4 col-sm-12">Fruta oficial</h3>
            <h3 class="col-md-4 col-sm-12">Hotel oficial</h3>
            <div class="row imagenes">
                <div class="col-md-4 col-sm-12 patrocinador">
                    <img src="../assets/logo.png" alt="Seat">
                    <p class="patrocinador-descripcion">Seat, movilidad garantizada para todos los eventos.</p>
                </div>
                <div class="col-md-4 col-sm-12 patrocinador">
                    <img src="../assets/logo.png" alt="Cerezas del Jerte">
                    <p class="patrocinador-descripcion">Cerezas del Jerte, dulzura natural en cada mordida.</p>
                </div>
                <div class="col-md-4 col-sm-12 patrocinador">
                    <img src="../assets/logo.png" alt="Hotel Azar">
                    <p class="patrocinador-descripcion">Hotel Azar, descanso de calidad para los competidores y visitantes.</p>
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
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    margin: 15px 0 15px 0;
}

.patrocinadores h3 {
    text-align: center;
}

.patrocinador {
    margin-bottom: 20px;
    text-align: center;
}

.patrocinador img {
    width: 100%;
    max-width: 250px;
    height: auto;
    margin: 10px 0;
}

.patrocinador-descripcion {
    font-size: 14px;
    color: #555;
    padding: 5px;
}


h3 {
    color: #0056b3; 

}

.titulos h3, .imagenes .patrocinador {
    
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
    .patrocinador img {
        max-width: 100%;
    }
}


</style>
