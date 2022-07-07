<template>
  <div class="container py-5">
    <div
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
      v-for="restaurant in restaurants" :key="restaurant.id"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img
              class="card-img"
              :src="restaurant.image"
            >
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge badge-secondary">收藏數：{{ restaurant.FavoriteCount }}</span>
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
            class="btn btn-primary mr-2"
            :to="{ name: 'restaurant', params: { id: restaurant.id }}"
            >
              Show
            </router-link>

            <button
              type="button"
              class="btn btn-danger mr-2"
              v-if="restaurant.isFavorited"
              @click.stop.prevent="deleteFavorite"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
              v-else
              @click.stop.prevent="addFavorite"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  props: {
    restaurants: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      restaurant: this.initialRestaurant
    }
  },
  methods: {
    async addFavorite () {
      try {
        this.restaurant = {
          ...this.restaurant,
          isFavorite: true
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得最佳餐廳資料，請稍後再試'
        })
      }
    },
    deleteFavorite () {
      this.restaurant = {
        ...this.restaurant,
        isFavorite: false
      }
    },
  }
}
</script>