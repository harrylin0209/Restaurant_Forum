import { apiHelper } from './../utils/helpers'

export default {
  categories: {
    get () {
      return apiHelper.get('/admin/categories')
    },
    create ({ name }) {
      return apiHelper.post('/admin/categories', { name })
    },
    update ({ categoryId, name }) {
      return apiHelper.put(`/admin/categories/${categoryId}`, { name })
    },
    delete ({ categoryId }) {
      return apiHelper.delete(`/admin/categories/${categoryId}`)
    },
  },
  restaurants: {
    get () {
      return apiHelper.get('/admin/restaurants')
    },
    getDetail ({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`)
    },
    create ({ formData }) {
      return apiHelper.post('/admin/restaurants', formData)
    },
    update ({ restaurantId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData)
    },
    delete ({ restaurantId }) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`)
    },
  },
  users: {
    get () {
      return apiHelper.get('/admin/users')
    },
    update ({ userId, isAdmin }) {
      return apiHelper.patch(`/admin/users/${userId}`, { isAdmin })
    }
  }
}