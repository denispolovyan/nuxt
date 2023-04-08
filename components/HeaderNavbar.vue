<template>
  <div class="header-navbar">
    <div class="header-navbar__body">
      <div class="header-navbar__logo">
        <nuxt-link to="/films" class="header-navbar__logo_text">Nuxt</nuxt-link>
      </div>

      <div class="header-navbar__content">
        <div class="header-navbar__item">
          <b-form-input
            size="sm"
            class="mr-sm-2 header-navbar__filter"
            placeholder="Search"
            v-model="filter"
          ></b-form-input>
        </div>
        <div class="header-navbar__item">
          <b-button
            size="sm"
            v-if="$store.getters.getUserInfo"
            @click="$router.push('/user-info')"
            >Watch profile</b-button
          >
          <b-button size="sm" v-else @click="$router.push('/user-auth')"
            >Sign in</b-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { films } from '~/api/films'
import { sessions } from '~/api/sessions'
import { halls } from '~/api/halls'

export default {
  data: () => {
    return {
      filter: '',
    }
  },
  watch: {
    filter() {
      this.$store.commit('setFilteredFilms', this.filter)
    },
  },
  created() {
    // router
    this.$router.push('/films')

    // user info
    const userInfo = localStorage.getItem('user-info')
    if (userInfo) {
      this.$store.commit('setUserInfo', JSON.parse(userInfo))
    }

    //  films and filteredFilms
    const loadedFilms = films
    this.$store.commit('setFilms', loadedFilms)
    this.$store.commit('setFilteredFilms', this.filter)

    //  sessions
    const loadedSessions = sessions
    this.$store.commit('setSessions', loadedSessions)

    //  halls
    const loadedHalls = halls
    this.$store.commit('setHalls', loadedHalls)
  },
}
</script>

<style scoped>
.header-navbar {
  padding: 0px 40px;
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
@media (max-width: 1050px) {
  .header-navbar {
    padding: 0px 20px;
  }
  .header-navbar__filter {
    width: 130px;
  }
}
</style>
