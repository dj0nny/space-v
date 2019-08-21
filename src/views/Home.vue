<template>
  <b-container class="feed text-center">
    <history :historyList="history" />
  </b-container>
</template>

<script>
import { onCreated } from 'vue-function-api';
import { useState, useActions } from '@u3u/vue-hooks';

import History from '../components/History.vue';

import types from '../store/types';

export default {
  name: 'Home',
  components: {
    History,
  },
  setup() {
    const { history } = useState(['history']);
    const { FETCH_HISTORY_FEED } = useActions([types.FETCH_HISTORY_FEED]);

    onCreated(async () => {
      await FETCH_HISTORY_FEED();
    });

    return {
      history,
    }
  },
};
</script>
