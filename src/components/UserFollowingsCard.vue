<template>
    <div class="card">
      <div class="card-header">
        <strong>{{ followings.length }}</strong> followings (追蹤者)
      </div>
      <div class="card-body">
        <router-link :to="{ name: 'user', params: {id: following.id}}" 
          v-for="following in followings" :key="following.id"
        >
          <img :src="following.image | emptyImage" width="60" height="60" class="avatar">
        </router-link>
      </div>
    </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'

export default {
  mixins: [emptyImageFilter],
  props: {
    followings: {
      type: Array,
      default: () => []
    }
  },
}
</script>
