<template>
    <div class="form-container">
        <form>
            <div class="form-group">
                <label for="fullname">Nombre Completo</label>
                <input type="text" class="form-control" id="fullname" placeholder="Nombre Completo">
            </div>
            <div class="form-group">
                <label for="registerEmail">Email</label>
                <input type="email" class="form-control" id="registerEmail" placeholder="Email">
            </div>
            <div class="form-group">
                <label for="registerPassword">Contraseña</label>
                <input type="password" class="form-control" id="registerPassword" placeholder="Contraseña">
            </div>
            <div class="form-group">
                <label for="confirmPassword">Confirmar Contraseña</label>
                <input type="password" class="form-control" id="confirmPassword" placeholder="Confirmar Contraseña">
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="terms">
                <label class="form-check-label" for="terms">Acepto los términos y condiciones</label>
            </div>
            <button type="submit" class="btn btn-primary">Registrar</button>
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
  margin: 20px auto; 
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.form-check-label {
  margin-left: 0.5rem;
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
