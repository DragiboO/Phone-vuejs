<template>
  <div class="center">
    <nav>
      <router-link to="/">Journal</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/clavier">Clavier</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
}



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.center {
  display: grid;
  grid-template-columns: 1fr 4fr;
}

nav {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-align: center;
  text-decoration: none;
  padding: 2.5rem;
  border: #2c3e50 4px solid;
}

nav a.router-link-exact-active {
  color: #42b983;
  border: #42b983 4px solid;
}

</style>
