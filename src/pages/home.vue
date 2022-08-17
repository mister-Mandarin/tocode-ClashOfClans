<template>
  <div class="md-body">
    <div class="card__wrapper" v-for="item in items" :key="item.id">
      <card
        :name="`${item.lvl} lvl`"
        :title="item.title"
        :image-url="item.img"
        :link="'/' + item.alias"
      >
        {{ item.descr }}
      </card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/UI/Card'
import items from '@/seeders/items'

export default {
  components: { card: Card },
  data() {
    return { items: items }
  }
}
</script>
