<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea
        v-model="text"
        class="form-control"
        rows="3"
        name="text"
      />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button
        type="button"
        class="btn btn-link"
        @click="$router.back()"
      >回上一頁</button>
      <button
        type="submit"
        class="btn btn-primary mr-0"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import commentsAPI from './../apis/comments'
import { Toast } from './../utils/helpers'

export default {
  name: 'CreateComment',
  props: {
    restaurantId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    async handleSubmit () {
      try {
        if (!this.text) {
          Toast.fire({
            icon: 'warning',
            title: '您尚未填寫任何評論'
          })
          return
        }
        // 向 API 發送 POST 請求
        const { data } = await commentsAPI.create({
          restaurantId: this.restaurantId,
          text: this.text
        })
        if (data.status === 'error') {
          throw new Error(data.message)
        }

        // 伺服器新增 Comment 成功後...
        this.$emit('after-create-comment', {
          commentId: data.commentId,
          restaurantId: this.restaurantId,
          text: this.text
        })
        this.text = '' // 將表單內的資料清空
      } catch (error) {
        console.error(error.message)
        Toast.fire({
          icon: 'error',
          title: '無法新增評論，請稍後再試'
        })
      }
    }
  }
}
</script>

<style scoped>
.form-group {
  margin: 21px 0 8px;
}
</style>