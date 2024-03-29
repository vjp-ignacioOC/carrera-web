<template>
  <div>
    <h2>HomeView</h2>
    <button @click="goToAbout">Go to About</button>
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
  },
};
</script>
