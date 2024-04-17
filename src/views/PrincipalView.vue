<template>

  <div class="main">
    <h1>Principal</h1>
    <div class="botones">
      <button @click="goToAbout">Go to About</button>
      <button @click="goToHome">Go to Home</button>
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
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>

h1 {
  color: red;
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