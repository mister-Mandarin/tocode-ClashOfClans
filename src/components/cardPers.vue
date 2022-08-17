<template>
  <div class="wrapper">
    <div v-if="item">
      <img :src="item.img" :alt="item.title" />
      <h1 class="title">{{item.title}}</h1>
      <p>{{item.descr}}</p>
    </div>

    <div class="button">
      <router-link class="btn btnPrimary" to="/">К персонажам</router-link>
    </div>
  </div>
</template>

<script>
import items from '@/seeders/items'

export default {
  data() {
    return {
      item: null
    }
  },
  created() {
    //нихуя не понимаю почему это работает...
    // В результате получаем конец адреса, который написан в адресной строке
    const alias = this.$route.params.person

    // ищем есть ли указанный алиас в seeders, в файлике с данными items
    const item = items.find(function (currentElement) {
      return currentElement.alias === alias
    })

   this.item = item
  }
}
</script>
