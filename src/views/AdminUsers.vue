<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th
            scope="col"
            width="140"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? 'admin' : 'user' }}</td>
          <td>
            <button
              v-if="currentUser.id !== user.id"
              type="button"
              class="btn btn-link"
              @click="toggleUserRole({ userId: user.id, isAdmin: user.isAdmin })"
            >
              {{ user.isAdmin ? 'set as user' : 'set as admin' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from './../components/AdminNav'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'

export default {
  components: {
    AdminNav 
  },
  data () {
    return {
      users: [],
    }
  },
  // 5. 調用 `fetchCategories` 方法
  computed: {
    ...mapState(['currentUser'])
  },
  created () {
    this.fetchUsers()
  },
  methods: {
    // 4. 定義 `fetchCategories` 方法，把 `dummyData` 帶入 Vue 物件
    async fetchUsers () {
      try {
        const { data } = await adminAPI.users.get()
        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.users = data.data.users
      } catch (error) {
          console.error(error.message)
          Toast.fire({
              icon: 'error',
              title: '無法取得會員資料，請稍後再試'
          })
      }
    },
    async toggleUserRole ({ userId, isAdmin }) {
      try {
        const { data } = await adminAPI.users.update({
          userId,
          isAdmin: (!isAdmin).toString()
        })
        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.users = this.users.map(user => {
          if (user.id === userId) {
            return {
              ...user,
              isAdmin: !user.isAdmin,
            }
          }  
          return user
        })
      } catch (error){
        console.error(error.message)
        Toast.fire({
          icon: 'error',
          title: '無法更新會員角色，請稍後再試'
        })
      }
    },
  }
}
</script>