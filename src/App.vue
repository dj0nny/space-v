<template>
  <div id="app">
    <Header />
    <div class="main-content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

body {
  font-family: 'Montserrat', sans-serif !important;
}

a {
  color: #fff !important;
}

.text-left {
  text-align: left;
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.main-content {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
