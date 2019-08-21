<template>
  <div class="history-item">
  <b-card :title="value.title" class="mb-2">
    <b-card-text>
      {{ value.details | truncate(100) }}
    </b-card-text>

    <b-button href="#" class="more">Discover more</b-button>
  </b-card>
  </div>
</template>

<script>
export default {
  name: 'HistoryItem',
  props: {
    value: Object,
  }
}
</script>

<style scoped>
.history-item {
    margin-bottom: 30px;
}

.card {
  -moz-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.4);
  -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.4);
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.4);
  min-height: 240px;
}

.more {
    background: #0b0b0b;
    border: 1px solid #0b0b0b;
    text-transform: uppercase;
    display: block;
    /* margin-top: 20px; */
    width: 200px;
    margin: auto;
    margin-top: 20px;
}

.more:hover {
    color: #0b0b0b !important;
    background: #fff;
}
</style>