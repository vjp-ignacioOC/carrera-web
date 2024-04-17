<template>

  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <RouterLink to="/" class="navbar-brand">Carrerita</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">Go to About</RouterLink>
          </li>
          <li class="nav-item">
            <Router-link to="/principal" class="nav-link">Go to Principal</Router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Conéctate
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Iniciar Sesión</a>
              <a class="dropdown-item" href="#">Registrarse</a>
              <div class="dropdown-divider"></div>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>


    <main>
      <RouterView />
    </main>


    <footer class="footer bg-light mt-1">
      <div class="container">
        <p class="text-muted">Place sticky footer content here.</p>
      </div>
    </footer>
  </div>

</template>


<style>

.navbar {
  position: absolute;
  width: 100%;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: brown;
  min-height: 100%;
}

footer {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 10vh;
  
}
</style>