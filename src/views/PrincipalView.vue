<!-- HTML de la vista -->
<template>

  <div class="principal">
    <h1>Principal</h1>
    <div class="botones">
      <button @click="goToAbout">Go to About</button>
      <button @click="goToHome">Go to Home</button>
    </div>
  </div>
  
</template>


<!-- Funcionalidad, con JavaScript, de la vista -->
<script>
export default {
  computed: {
    $route() {
      return this.$route.fullPath;
    },
  },
  methods: {
    goToAbout() {
      this.$router.push("/about");
    },
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>


<!-- Estilos de CSS para la vista -->
<style scoped>

h1 {
  color: white;
}

.botones {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.principal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

</style>