<template>
  <div class='card'>
    <div v-if='imageUrl' class='card-img__wrapper'>
      <img :src='imageUrl' :alt='title' class='card-img' />
    </div>
    <span class='card-name'>{{ name }}</span>
    <span class='card-title'>{{ title }}</span>
    <div class='card-body'>
      <!--      Подробнее о слотах
      https://v3.ru.vuejs.org/ru/guide/component-slots.html#%D1%81%D0%BE%D0%B4%D0%B5%D1%80%D0%B6%D0%B8%D0%BC%D0%BE%D0%B5-%D1%81%D0%BB%D0%BE%D1%82%D0%B0-->
      <slot name='aboutPers'></slot>

      <!--
      перенаправляет по link, которая приходит из страницы home.
      На этой странице мы импортировали файлик с данными items, по которому
      проходит цикл v-for и рисует нам элементы по item. Ищет item.alias
      -->
      <router-link
        style='display: block; margin-top: 20px'
        v-if='link'
        :to='link'
      >О персонаже
      </router-link>

    </div>
    <slot name='characteristics'>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: false
    },
    link: {
      type: String
    }
  }
};
</script>
