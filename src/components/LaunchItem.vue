<template>
  <b-card :title="launchDetails.mission_name" :img-src="launchDetails.links.mission_patch_small" img-top style="max-width: 20rem;" class="mb-2">
    <router-link class="more" :to="{ name: 'launchDetail', params: { id: launchDetails.flight_number }}">Discover more</router-link>
  </b-card>
</template>

<script>
export default {
  name: 'LaunchItem',
  props: {
    launchDetails: Object,
  },
};
</script>


<style scoped>
img.card-img-top {
  padding: 25px;
  width: 250px;
  margin: auto;
}
</style>
