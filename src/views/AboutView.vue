<template>
    <div>
        <h2>AboutView</h2>
        <label>
          Search: <input v-model.trim="search" maxlength="20">
        </label>
        <button @click="goToHome">Go to Home</button>
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
  },
};
</script>
