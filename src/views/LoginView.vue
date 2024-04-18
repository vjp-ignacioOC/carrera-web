<template>
    <div>
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
    },
  },
};
</script>

<style>
</style>