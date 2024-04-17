<template>
  <div class="main">
    <h2>AboutView</h2>
    <label> Search: <input v-model.trim="search" maxlength="20" /> </label>
    <div class="botones">
      <button @click="goToHome">Go to Home</button>
      <button @click="goToPrincipal">Go to Principal</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    search() {
      return this.$route.query.search || "";
    },
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    goToPrincipal() {
      this.$router.push("/principal");
    },
  },
};
</script>

<style scoped>
  h2 {
    color: green;
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