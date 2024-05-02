<template>
    <div>
        <!-- Patrocinadores oficiales del maratón -->
        <h2>Patrocinadores</h2>
        <div class="container patrocinadores">

            <div class="row colaborador">
                <h3 class="col-md-12">Colabora</h3>
                <div class="col-md-6 col-sm-12 patrocinador">
                    <!-- Ayto de Plasencia y la Junta -->
                    <img src="../assets/logo.png" alt="Iberdrola">
                </div>
                <div class="col-md-6 col-sm-12 patrocinador">
                    <img src="../assets/logo.png" alt="Iberdrola">
                </div>
            </div>
            <hr />

            <div class="row principales">
                <h3 class="col-md-12">Patrocinadores Principales</h3>
                <div class="col-md-6 col-sm-12 patrocinador">
                    <img src="../assets/logo.png" alt="Renfe">
                </div>
                <div class="col-md-6 col-sm-12 patrocinador">
                    <img src="../assets/logo.png" alt="Iberia">
                </div>
            </div>
            <hr />


            <div class="row secundarios">
                <h3 class="col-md-12">Patrocinadores Secundarios</h3>
                <div class="col-md-6 col-sm-12 patrocinador">
                    <img src="../assets/logo.png" alt="Coca Cola">
                </div>
                <div class="col-md-6 col-sm-12 patrocinador">
                    <img src="../assets/logo.png" alt="Nike">
                </div>
            </div>
            <hr />


            <div class="row terceros">
                <div class="col-12">
                    <div class="row titulos">
                        <h3 class="col-md-4 col-sm-12">Vehículo oficial</h3>
                        <h3 class="col-md-4 col-sm-12">Fruta oficial</h3>
                        <h3 class="col-md-4 col-sm-12">Hotel oficial</h3>
                    </div>
                    <div class="row imagenes">
                        <div class="col-md-4 col-sm-12 patrocinador">
                            <img src="../assets/logo.png" alt="Seat">
                        </div>
                        <div class="col-md-4 col-sm-12 patrocinador">
                            <img src="../assets/logo.png" alt="Cerezas del Jerte">
                        </div>
                        <div class="col-md-4 col-sm-12 patrocinador">
                            <img src="../assets/logo.png" alt="Hotel Azar">
                        </div>
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

<style scoped></style>
