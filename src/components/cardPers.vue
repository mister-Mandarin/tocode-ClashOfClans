<template>
  <div class='wrapper-person'>
    <div>
      <img :src='item.img' :alt='item.title' />
      <h1 class='title' style='color: white'>{{ item.title }}</h1>
      <p>{{ item.descr }}</p>
    </div>
    <UiCardStats :info='item.info' />
    <div class='button'>
      <router-link class='btn btnPrimary' to='/'>К персонажам</router-link>
    </div>
  </div>
</template>

<script>
import items from '@/seeders/items';
import UiCardStats from '@/components/UI/uiCardStats';

export default {
  components: {UiCardStats},

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
