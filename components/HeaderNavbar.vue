<template>
  <div class="header-navbar">
    <div class="header-navbar__body">
      <div class="header-navbar__logo">
        <nuxt-link to="/" class="header-navbar__logo_text">Nuxt</nuxt-link>
      </div>

      <div class="header-navbar__content">
        <div class="header-navbar__item">
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Search"
          ></b-form-input>
        </div>
        <div class="header-navbar__item">
          <nuxt-link v-if="$store.getters.getUserInfo" to="UserInfo"
            ><b-button size="sm">Watch profile</b-button></nuxt-link
          >
          <nuxt-link v-else to="UserAuth"
            ><b-button size="sm">Sign in</b-button></nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    const userInfo = localStorage.getItem('user-info')
    if (userInfo) {
      this.$store.commit('setUserInfo', JSON.parse(userInfo))
    }
  },
}
</script>

<style scoped>
.header-navbar {
  padding: 0px 30px;
  background-color: #2c261e;
  color: #fff;
}
.header-navbar__body {
  height: 60px;
  display: flex;
  align-items: center;
}
.header-navbar__logo {
  flex: 1 1 auto;
}
.header-navbar__logo_text {
  color: #fff;
  text-decoration: none;
}
.header-navbar__content {
  align-items: center;
  display: flex;
  gap: 10px;
}
</style>
