<template>
  <div>
    <h2>HomeView</h2>
    <button @click="goToAbout">Go to About</button>
    <button @click="goToPrincipal">Go to Principal</button>

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
