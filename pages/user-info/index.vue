<template>
  <div class="user-info">
    <div class="user-info__body">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">User info</h4>
          <p class="card-text">{{ userInfo.name }}</p>
          <p class="card-text">{{ userInfo.email }}</p>
          <b-button variant="dark" size="sm" @click="deleteUser"
            >Sign out</b-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      userInfo: '',
    }
  },
  created() {
    this.userInfo = this.$store.getters.getUserInfo
  },
  methods: {
    deleteUser() {
      const isDelete = confirm(`Delete user ${this.userInfo.name}`)
      if (isDelete) {
        this.$router.push('/films')
        this.$store.commit('deleteUserInfo')
        localStorage.removeItem('user-info')
      }
    },
  },
}
</script>

<style scoped>
.user-info {
  margin: 40px 0px;
  padding: 0px 30px;
}
.user-info__body {
  display: flex;
  justify-content: center;
}
</style>
