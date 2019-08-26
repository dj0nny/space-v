<template>
  <b-container>
    <b-row>
      <b-col v-if="isLoading" md=12 class="text-center">
        <b-spinner label="Spinning"></b-spinner>
      </b-col>
    </b-row>
    <b-row v-if="!isLoading">
      <b-col v-for="(launch, index) in launches" :key="index" md=4 class="text-center">
        <LaunchItem :launchDetails="launch" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { onCreated } from 'vue-function-api';
import { useState, useActions } from '@u3u/vue-hooks';

import types from '../store/types';

import LaunchItem from '../components/LaunchItem.vue';

export default {
  name: 'Launches',
  components: {
    LaunchItem,
  },
  setup() {
    const { launches, isLoading } = useState(['launches', 'isLoading']);
    const { FETCH_LAUNCHES } = useActions([types.FETCH_LAUNCHES]);

    onCreated(async () => {
      await FETCH_LAUNCHES();
    });

    return {
      launches,
      isLoading,
    };
  },
};
</script>
