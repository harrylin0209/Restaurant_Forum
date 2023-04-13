import { apiHelper } from './../utils/helpers'

export default {
  getCurrentUser ({ id }) {
    return apiHelper.get(`/users/${id}`)
  },
  getUser ({ id }) {
    return apiHelper.get(`/users/${id}`)
  },
  updateUser ({ id, formData }) {
    return apiHelper.put(`/users/${id}`, formData)
  },
  addFavorite ({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`, null)
  },
  deleteFavorite ({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`)
  },
  addLike ({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`, null)
  },
  deleteLike ({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`)
  },
  getTopUsers () {
    return apiHelper.get('/users/top')
  },
  addFollowing ({ userId }) {
    return apiHelper.post(`/following/${userId}`, null)
  },
  deleteFollowing ({ userId }) {
    return apiHelper.delete(`/following/${userId}`)
  }
}