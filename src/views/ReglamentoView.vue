<template>
    <div>
        <h1>Reglamento</h1>
        <p>En esta página se mostrará el reglamento del centro.</p>
    </div>
</template>

<script>
    export default {
      $route() {
        return this.$route.fullPath;
      },
    }

</script>

<style scoped>
</style>