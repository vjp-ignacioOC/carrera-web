<template>
  <div>
    <h1>Hello App!</h1>
    <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
    <nav>
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/about">Go to About</RouterLink>
      <Router-link to="/principal">Go to Principal</router-link>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>


