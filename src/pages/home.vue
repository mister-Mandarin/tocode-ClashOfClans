<template>
  <div class='md-body'>
    <div class='card__wrapper' v-for='item in items' :key='item.id'>
      <card :name='`${item.lvl} lvl`' :title='item.title' :image-url='item.img'>
        {{ item.descr }}
      </card>

    </div>
  </div>
</template>

<script>
import {images} from '@/assets/img/configImages';
import Card from '@/components/UI/Card';

export default {
  components: {card: Card},
  data() {
    return {
      items: [
        {
          id: 1,
          title: images[1].title,
          descr: 'description description description description',
          // Если бы картинки лежали в папке, то делаем так.
          // img: require(' путь то картинки ')
          img: images[1].url,
          lvl: 2
        },
        {
          id: 2,
          title: images[2].title,
          descr: 'description description description description',
          img: images[2].url,
          lvl: 4
        },
        {
          id: 2,
          title: images[3].title,
          descr: 'description description description description',
          img: images[3].url,
          lvl: 8
        }
      ]
    };
  }
};
</script>
