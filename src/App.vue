<template>

  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <RouterLink to="/" class="navbar-brand">Carrerita</RouterLink>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <RouterLink to="/" class="nav-link">Inicio</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/entrenamientos" class="nav-link">Entrenamientos</RouterLink>
          </li>
          <li class="nav-item" v-if="conectado">
            <Router-link to="/perfil" class="nav-link">Mi Perfil</Router-link>
          </li>
          <li class="nav-item dropdown" v-else>
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Conéctate
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Router-link to="/login" class="dropdown-item">Iniciar Sesión</Router-link>
              <div class="dropdown-divider"></div>
              <Router-link to="/registro" class="dropdown-item">Registrarse</Router-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <main>
      <RouterView />
    </main>

    <footer class="footer bg-light mt-1">
      <div class="container">
        <ul class="foote_bottom_ul_amrc">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <p class="text-center">
          Copyright &copy;2024 | Designed With by <a href="https://iesvallejertepla.educarex.es/" target="_blank"
            class="text-muted">IES Valle Del Jerte</a>
        </p>

        <ul class="social_footer_ul">
          <li>
            <a href="http://webenlance.com"><i class="fab fa-facebook-f"></i></a>
          </li>
          <li>
            <a href="http://webenlance.com"><i class="fab fa-twitter"></i></a>
          </li>
          <li>
            <a href="http://webenlance.com"><i class="fab fa-instagram"></i></a>
          </li>
        </ul>
      </div>
    </footer>
  </div>

</template>

<script>
import { auth } from './firebase'
import { ref, onMounted } from 'vue'

export default {
  name: "App",
  setup() {
    const conectado = ref(false);

    onMounted(() => {
      auth.onAuthStateChanged(user => {
        conectado.value = !!user;
        console.log(user ? 'Usuario conectado' : 'Usuario desconectado');
      });
    });

    return { conectado };
  }
};

</script>


<style>
.navbar {
  position: relative;
  width: 100%;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightcoral;
  min-height: 100vh;
}

footer {
  width: 100%;
  background-color: #263238;
  padding: 10px 0px 25px 0px;
}

footer p {
  font-size: 13px;
  color: #ccc;
  padding-bottom: 0px;
  margin-bottom: 8px;
}

.foote_bottom_ul_amrc {
  list-style-type: none;
  padding: 0px;
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 10px;
  margin-right: auto;
  margin-left: auto;
}

.foote_bottom_ul_amrc li {
  display: inline;
}

.foote_bottom_ul_amrc li a {
  color: #999;
  margin: 0 12px;
}

.social_footer_ul {
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 15px auto 0 auto;
  list-style-type: none;
}

.social_footer_ul li {
  padding-left: 20px;
  padding-top: 10px;
}

.social_footer_ul li a {
  color: #ccc;
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 50%;
}

.social_footer_ul li i {
  width: 20px;
  height: 20px;
  text-align: center;
}
</style>