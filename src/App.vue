<template lang="pug">
  VehicleCollect
</template>

<script>
import VehicleCollect from './pages/VehicleCollect'
import store from './store/'

export default {
  name: 'app',
  store,
  components: { VehicleCollect },
}
</script>

<style lang="scss">
body{
  font-family: 'Ubuntu', 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*{
  margin: 0;
  padding: 0;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
*:focus{
  outline: none;
}
</style>
