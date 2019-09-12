<template>
  <b-container class="home">
    <b-row>
      <b-col md="12" class="text-center">
        <h1 id="app-title">space-v</h1>
        <h3 class="subtitle">A client built with Vue.js for the SpaceX API</h3>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
h1#app-title {
  font-size: 60px;
  font-weight: bold;
}
</style>
