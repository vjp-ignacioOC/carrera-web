<template>
  <div class="main">
    <h2>HomeView</h2>
    <div class="botones">
      <button @click="goToAbout">Go to About</button>
      <button @click="goToPrincipal">Go to Principal</button>
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
    goToAbout() {
      this.$router.push("/about");
    },
    goToPrincipal() {
      this.$router.push("/principal");
    }
  },
};
</script>

<style scoped>
  h2 {
    color: blue;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
  }

  .botones {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

</style>