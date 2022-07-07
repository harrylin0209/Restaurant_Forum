<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <!-- 回到上一頁 previousPage -->
      <li
        v-show="previousPage"
        :class="['page-item', { disabled: currentPage === 1 }]"
      >
        <router-link
          class="page-link"
          aria-label="Previous"
          :to="{
            name: 'restaurants',
            query: { categoryId, page: previousPage }
          }"
        >
          <span aria-hidden="true">&laquo;</span>
        </router-link>
      </li>

      <!-- 頁碼 -->
      <li
        v-for="page in totalPage"
        :key="page"
        :class="['page-item', { active: currentPage === page }]"
      >
        <router-link
          class="page-link"
          :to="{name: 'restaurants', query: { categoryId, page }}"
        >
          {{ page }}
        </router-link>
      </li>

      <!-- 前往下一頁 nextPage -->
      <li
        v-show="nextPage"
        :class="['page-item', { disabled: currentPage === totalPage.length }]"
      >
        <router-link
          class="page-link"
          :to="{ name: 'restaurants', query: { categoryId, page: nextPage } }"
          aria-label="Next"
        >
          <span aria-hidden="true">&raquo;</span>
        </router-link>
      </li>

    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    categoryId: {
      type: [String, Number],
      default: ''
    },
    currentPage: {
      type: Number,
      default: 1
    },
    totalPage: {
      type: Array,
      required: true
    },
    previousPage: {
      type: Number,
      required: true
    },
    nextPage: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.page-link {
  height: 37px;
  padding: 7px 20px;
  color: #00CACA;
}

.page-item.active .page-link,
.page-item.active span {
  color: white;
  background-color: #00CACA;
  border-color: #00CACA;
  z-index: 1;
}

.page-item span {
  color: #00CACA;
}

a.page-link:hover,
a.page-link:hover span {
  color: white;
  background-color: #00CACA;
  border-color: #00CACA;
}
</style>