<template>
  <div class="footer">
    <b-container>
      <b-row>
        <b-col md=12 class="text-center">
          Built with ❤ by <a href="https://github.com/dj0nny" target="_blank">Dj0nny</a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { value } from 'vue-function-api';

export default {
  name: 'Footer',
  setup() {
    const year = value(new Date().getFullYear());

    return {
      year,
    };
  },
};
</script>

<style scoped>
.footer {
  background: #0b0b0b;
  color: #fff;
  padding: 75px;
}
</style>
