<template>
  <div class='wrapper-person'>
    <div v-if='item'>
      <img :src='item.img' :alt='item.title' />
      <h1 class='title' style='color: white'>{{ item.title }}</h1>
      <p>{{ item.descr }}</p>
    </div>
    <div class='card-stats'>
      <div v-for='(shar, index) in item.info' :key='index' class='one-third'>
        <div class='stat-value'>{{ shar.value }}</div>
        <div class='stat'>{{ shar.title }}</div>
      </div>
    </div>
    <div class='button'>
      <router-link class='btn btnPrimary' to='/'>К персонажам</router-link>
    </div>
  </div>
</template>

<script>
import items from '@/seeders/items';

export default {
  data() {
    return {
      item: null
    };
  },
  created() {
    //нихуя не понимаю почему это работает...
    // В результате получаем конец адреса, который написан в адресной строке
    // https://v3.router.vuejs.org/guide/essentials/dynamic-matching.html#catch-all-404-not-found-route
    const alias = this.$route.params.person;

    // ищем есть ли указанный алиас в seeders, в файлике с данными items
    const item = items.find(function(currentElement) {
      return currentElement.alias === alias;
    });

    this.item = item;
  }
};
</script>

<style lang='scss'>
.wrapper-person {
  text-align: center;

  .card-stats {
    margin: 30px 0;
    border-radius: 15px;
  }
}
</style>
