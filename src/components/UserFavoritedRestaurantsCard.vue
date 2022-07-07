<template>
    <div class="card">
      <div class="card-header">
        <strong>{{ favoritedRestaurants.length }}</strong> 收藏的餐廳
      </div>
      <div class="card-body">
        <router-link :to="{ name: 'restaurant', params: {id: favoritedRestaurant.id}}"
          v-for="favoritedRestaurant in favoritedRestaurants" 
          :key="favoritedRestaurant.id"
        >
          <img :src="favoritedRestaurant.image | emptyImage" width="60" height="60" class="avatar">
        </router-link>
      </div>
    </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'

export default {
  mixins: [emptyImageFilter],
  props: {
    favoritedRestaurants: {
      type: Array,
      default: () => []
    }
  },
}
</script>