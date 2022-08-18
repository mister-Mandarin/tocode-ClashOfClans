<template>
  <carousel :settings='settings' :breakpoints='breakpoints'>
    <slide class='card__wrapper' v-for='item in items' :key='item.id'>
      <ui-card
        :name='`${item.lvl} lvl`'
        :title='item.title'
        :image-url='item.img'
        :link="'/' + item.alias"
      >
        <template v-slot:aboutPers>
          {{ item.descr }}
        </template>

        <template v-slot:characteristics>
          <div class='card-stats'>
            <div
              v-for='(shar, index) in item.info'
              :key='index'
              class='one-third'
            >
              <div class='stat-value'>{{ shar.value }}</div>
              <div class='stat'>{{ shar.title }}</div>
            </div>
          </div>
        </template>
      </ui-card>
    </slide>

    <template #addons>
      <navigation />
    </template>

  </carousel>
</template>

<script>
import Card from '@/components/UI/uiCard';
import items from '@/seeders/items';
// импортируем цсс карусели
import 'vue3-carousel/dist/carousel.css';

import {Carousel, Slide, Navigation} from 'vue3-carousel';
import UiCard from '@/components/UI/uiCard';

export default {
  components: {
    UiCard,
    card: Card,

    // компоненты карусели
    Carousel,
    Slide,
    Navigation
  },
  data() {
    return {
      items: items,
      settings: {
        itemsToShow: 3,
        wrapAround: true,
        snapAlign: 'center'
      },
      breakpoints: {
        300: {
          itemsToShow: 1
        },
        700: {
          itemsToShow: 2
        }
      }
    };
  }
};
</script>
