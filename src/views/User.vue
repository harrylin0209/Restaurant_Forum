<template>
  <div class="container py-4">    
    <div class="card mb-3">
      <UserProfileCard 
        :user="user"
        :is-current-user="currentUser.id === user.id"
        :initial-is-followed="isFollowed"
      />
    </div>
    <div class="row">
      <div class="col-md-4">
        <UserFollowingsCard :followings="followings" />
        <br>
        <UserFollowersCard :followers="followers" />  
      </div>
      <div class="col-md-8">
        <UserCommentsCard :comments="comments" />
        <br>
        <UserFavoritedRestaurantsCard :favorited-restaurants="favoritedRestaurants" />
      </div>  
    </div>
  </div>
</template>

<script>
import UserProfileCard from './../components/UserProfileCard'
import UserFollowingsCard from './../components/UserFollowingsCard'
import UserFollowersCard from './../components/UserFollowersCard'
import UserCommentsCard from './../components/UserCommentsCard'
import UserFavoritedRestaurantsCard from './../components/UserFavoritedRestaurantsCard'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'

export default {
  name: 'User',
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard
  },
  data () {
    return {
      user: {
        id: 0,
        image: '',
        name: '',
        email: '',
        followingsLength: 0,
        followersLength: 0,
        commentsLength: 0,
        favoritedRestaurantsLength: 0
       },
      isFollowed: false,
      followings: [],
      followers: [],
      comments: [],
      favoritedRestaurants: []
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  created () {
    const { id } = this.$route.params
    this.fetchUser(id)
  },
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params
    this.fetchUser(id)
    next()
  },
  methods: {
    async fetchUser (userId) {
      try {
        const { data } = await usersAPI.getUser({id: userId})
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        const {
          id,
          image,
          name,
          email,
          Followings,
          Followers,
          Comments,
          FavoritedRestaurants
        } = data.user

        const commentSet = new Set()
        this.comments = Comments.filter(
          comment =>
            comment.Restaurant &&
            !commentSet.has(comment.Restaurant.id) &&
            commentSet.add(comment.Restaurant.id)
        )
        
        this.user = {
          ...this.user,
          id,
          image,
          name,
          email,
          followingsLength: Followings.length,
          followersLength: Followers.length,
          commentsLength: this.comments.length,
          favoritedRestaurantsLength: FavoritedRestaurants.length
        }
        this.followings = Followings
        this.followers = Followers
        this.favoritedRestaurants = FavoritedRestaurants

      } catch(error) {
        console.error(error.message)
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資料，請稍後再試'
        })
      }
    }
  }
}    
</script>
