<template>
  <div class="history-detail">
    <b-container>
      <b-row>
        <b-col md=12 class="text">
          <h1 class="article-title">{{ currentHistoryItem.title }}</h1>
          <p class="description">
            {{ currentHistoryItem.details }}
          </p>
          <h5 class="more-links">Useful links</h5>
          <ul class="links">
            <div v-for="(link, index) in currentHistoryItem.links" :key="index">
              <li v-if="link" class="link" >
                <a class="external" target="_blank" :href="link">{{ link }}</a>
              </li>
            </div>
          </ul>
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
  name: 'HistoryDetail',
  setup() {
    const { currentHistoryItem } = useState(['currentHistoryItem']);
    const { FETCH_HISTORY_DETAIL } = useActions([types.FETCH_HISTORY_DETAIL]);
    const { route } = useRouter();

    onCreated(async () => {
      await FETCH_HISTORY_DETAIL(route.value.params.id);
    });

    return {
      currentHistoryItem,
    };
  },
};
</script>

<style scoped>
a.external {
  color: #0b0b0b !important;
}
</style>