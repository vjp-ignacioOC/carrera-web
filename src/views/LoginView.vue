<template>
  <div class="form-container">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Introduzca su Email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          placeholder="Email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Contraseña</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña">
        <small id="emailHelp" class="form-text text-muted">No comparta su contraseña con nadie.</small>
      </div>
      <button type="submit" class="btn btn-primary">Acceder</button>
    </form>
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

<style scoped>
  .form-container {
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin: auto; /* Centrado automático en el contenedor padre */
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.form-text {
  display: block;
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: #6c757d;
}

button.btn {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

button.btn:hover {
  background-color: #0056b3;
}
</style>