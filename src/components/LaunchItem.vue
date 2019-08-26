<template>
  <div>
    {{ launchDetails.mission_name }}
  </div>
</template>

<script>
export default {
  name: 'LaunchItem',
  props: {
    launchDetails: Object,
  },
};
</script>
