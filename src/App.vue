<template>
  <div>
    <nav>
      <h1>Hello App!</h1>
      <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/about">Go to About</RouterLink>
      <Router-link to="/principal">Go to Principal</router-link>
    </nav>
    <main>
      <RouterView />
    </main>
    <footer>
      <p>Footer</p>
    </footer>
  </div>
</template>


<style>
  nav {
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  top: 0;
  left: 0;
}

nav h1 {
  margin: 0;
}

nav p {
  margin: 0;
}

nav a {
  color: white;
  text-decoration: none;
  margin-left: 10px;
}

nav a:hover {
  text-decoration: underline;
  color: white;
}


footer {
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 10vh;
}

</style>