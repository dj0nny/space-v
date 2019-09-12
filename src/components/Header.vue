<template>
  <div class="header text-center">
    <b-container>
      <b-row>
        <b-col md=12>
          <ul class="menu">
            <li class="menu-item" v-for="(link, index) in links" :key="index">
              <router-link :to="link.linkTo">{{ link.name }}</router-link>
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
    const links = value([
      {
        name: 'Home',
        linkTo: '/',
      },
      {
        name: 'Launches',
        linkTo: '/launches',
      },
      {
        name: 'News',
        linkTo: '/news',
      },
    ]);

    return {
      links,
    };
  },
};
</script>

<style scoped>
.header {
  background: #0b0b0b;
  color: #fff;
  padding: 25px;
}

h1 a {
  text-decoration: none;
}

ul.menu {
  margin: 0;
  padding: 0;
  list-style-type: none;
  margin-top: 0;
}

ul.menu li.menu-item {
  display: inline-block;
}

ul.menu li.menu-item a {
    margin-right: 20px;
    padding: 5px;
}

ul.menu li.menu-item:last-child a {
    margin-right: 0;
    padding: 5px;
}
</style>
