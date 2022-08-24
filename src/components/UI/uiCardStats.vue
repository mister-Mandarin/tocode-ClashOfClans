<template>
  <div class='card-stats'>
    <div v-for='(shar, index) in info' :key='index' class='one-third'>
      <div class='stat-value'>{{ shar.value }}</div>
      <div class='stat'>{{ shar.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Array
    }
  }
};
</script>
