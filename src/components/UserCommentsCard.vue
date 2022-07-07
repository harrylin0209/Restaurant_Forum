<template>
    <div class="card">
      <div class="card-header">
        <strong>{{ comments.length }}</strong> 已評論餐廳
      </div>
      <div class="card-body">
        <router-link :to="{ name: 'restaurant', params: {id: comment.Restaurant.id}}"
          v-for="comment in comments" :key="comment.id"
        >
          <img :src="comment.Restaurant.image | emptyImage" width="60" height="60" class="avatar">
        </router-link>
      </div>
    </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'

export default {
  mixins: [emptyImageFilter],
  props: {
    comments: {
      type: Array,
      default: () => []
    }
  },
}
</script>