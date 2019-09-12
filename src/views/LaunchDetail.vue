<template>
  <div class="launch-detail">
    <b-container>
      <b-row>
        <b-col v-if="isLoading" md=12 class="text-center">
          <b-spinner label="Spinning"></b-spinner>
        </b-col>
      </b-row>
      <b-row v-if="!isLoading">
        <b-col md=6 class="text-center">
          <img class="mission-patch" :src="currentLaunch.links.mission_patch_small" alt="">
        </b-col>
        <b-col md=3 class="text-left details">
          <div class="detail">
            <h6><strong>Mission name:</strong> {{ currentLaunch.mission_name }}</h6>
          </div>
          <div class="detail">
            <h6><strong>Launch year:</strong> {{ currentLaunch.launch_year }}</h6>
          </div>
          <div class="detail">
            <h6><strong>Rocket name:</strong> {{ currentLaunch.rocket.rocket_name }}</h6>
          </div>
          <div class="detail">
            <h6><strong>Rocket type:</strong> {{ currentLaunch.rocket.rocket_type }}</h6>
          </div>
          <div class="detail">
            <h6><strong>Launch site:</strong> {{ currentLaunch.launch_site.site_name_long }}</h6>
          </div>
        </b-col>
        <b-col md=3>
          <div class="mission-status text-center">
            <b-alert show variant="success" v-if="currentLaunch.launch_success">Success</b-alert>
            <b-alert show variant="danger" v-else>Aborted</b-alert>
          </div>
        </b-col>
        <b-col md=12>
          <h5 class="subtitle">Details</h5>
          {{ currentLaunch.details }}
        </b-col>
        <b-col md=12>
          <h5 class="subtitle more-links">Useful links</h5>
          <ul class="links">
            <li class="link" >
              <a class="external" target="_blank" :href="currentLaunch.links.article_link">{{ currentLaunch.links.article_link }}</a>
            </li>
            <li class="link" >
              <a class="external" target="_blank" :href="currentLaunch.links.wikipedia">{{ currentLaunch.links.wikipedia }}</a>
            </li>
            <li class="link" >
              <a class="external" target="_blank" :href="currentLaunch.links.video_link">{{ currentLaunch.links.video_link }}</a>
            </li>
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
  name: 'LaunchDetail',
  setup() {
    const { currentLaunch, isLoading } = useState(['currentLaunch', 'isLoading']);
    const { FETCH_LAUNCH_DETAIL } = useActions([types.FETCH_LAUNCH_DETAIL]);
    const { route } = useRouter();

    onCreated(async () => {
      await FETCH_LAUNCH_DETAIL(route.value.params.id);
    });

    return {
      currentLaunch,
      isLoading,
    };
  },
};
</script>


<style scoped>
.subtitle {
  margin-top: 30px;
  font-weight: bold;
}

a.external {
  color: #000 !important;
}

.detail {
  margin-bottom: 30px;
}

.details .detail:last-child {
  margin-bottom: 0px;
}
</style>
