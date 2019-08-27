<template>
  <div class="history-item">
  <b-card :title="value.title" class="mb-2">
    <b-card-text>
      {{ value.details | truncate(100) }}
    </b-card-text>

    <router-link class="more" :to="{ name: 'historyDetailPage', params : { id: value.id }}">Discover more</router-link>
  </b-card>
  </div>
</template>

<script>
export default {
  name: 'HistoryItem',
  props: {
    value: Object,
  },
};
</script>

<style>
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
  width: 200px;
  margin: auto;
  margin-top: 20px;
  padding: 10px 20px;
  transition: .3s all;
}

.more:hover {
  color: #0b0b0b !important;
  background: #fff;
}

@media screen and (max-width: 768px)  {
  .more {
    width: 170px;
  }
}
</style>
