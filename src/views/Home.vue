<template>
  <b-container class="feed text-center">
    <b-spinner v-if="isLoading" label="Spinning"></b-spinner>
    <history v-if="!isLoading" :historyList="history" />
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
    const { history, isLoading } = useState(['history', 'isLoading']);
    const { FETCH_HISTORY_FEED } = useActions([types.FETCH_HISTORY_FEED]);

    onCreated(async () => {
      await FETCH_HISTORY_FEED();
    });

    return {
      history,
      isLoading,
    };
  },
};
</script>
