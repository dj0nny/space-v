<template>
  <div class="launch-detail">
    <b-container>
      <b-row>
        <b-col v-if="isLoading" md=12 class="text-center">
          <b-spinner label="Spinning"></b-spinner>
        </b-col>
        <b-col v-if="!isLoading" md=12 class="text-center">
          {{ currentLaunch }}
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { onCreated } from 'vue-function-api';
import { useState, useActions, useRouter } from '@u3u/vue-hooks';

import types from '../store/types';

export default {
  name: 'LaunchDetail',
  setup() {
    const { currentLaunch, isLoading } = useState(['currentLaunch', 'isLoading']);
    const { FETCH_LAUNCH_DETAIL } = useActions([types.FETCH_LAUNCH_DETAIL]);
    const { route } = useRouter();

    onCreated(async () => {
      FETCH_LAUNCH_DETAIL(route.value.params.id);
    });

    return {
      currentLaunch,
      isLoading,
    };
  },
};
</script>
