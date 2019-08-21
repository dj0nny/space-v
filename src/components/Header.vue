<template>
  <div class="header">
    <b-container>
      <b-row>
        <b-col md=5>
          <h1 class="app-title">
            space-v
          </h1>
        </b-col>
        <b-col md=7>
          <ul class="menu">
            <li class="menu-item">
              <router-link to="/">Home</router-link>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { value } from 'vue-function-api';

export default {
  name: 'Header',
  setup() {

    return {

    }
  }
}
</script>

<style scoped>
.header {
  background: #0b0b0b;
  color: #fff;
  padding: 15px;
}

ul.menu {
  margin: 0;
  padding: 0;
  list-style-type: none;
  margin-top: 15px;
}

ul.menu li.menu-item {
  display: inline-block;
}
</style>