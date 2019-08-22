<template>
  <b-row>
    <b-col md=4 v-for="(item, index) in historyList" :key="index">
      <HistoryItem :value="item" />
    </b-col>
  </b-row>
</template>

<script>
import HistoryItem from './HistoryItem.vue';

export default {
  name: 'News',
  components: {
    HistoryItem,
  },
  props: {
    historyList: Array,
  },
};
</script>

<style scoped>

</style>
