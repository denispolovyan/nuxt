<template>
  <div class="header-navbar">
    <div class="header-navbar__body">
      <div class="header-navbar__logo">
        <nuxt-link to="/films" class="header-navbar__logo_text">Nuxt</nuxt-link>
      </div>

      <div class="header-navbar__content">
        <div class="header-navbar__item">
          <div class="form-check form-switch header-navbar__switcher">
            <input
              style="margin-right: 7px"
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              v-model="darkTheme"
            />
            <b-icon-sun v-if="!darkTheme"></b-icon-sun>
            <b-icon-moon-stars v-if="darkTheme"></b-icon-moon-stars>
          </div>
        </div>
        <div class="header-navbar__item" v-if="$route.path === '/films'">
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
            v-if="$store.getters.getUserInfo.name"
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
import { BIconSun, BIconMoonStars } from 'bootstrap-vue'
import { films } from '~/api/films'
import { sessions } from '~/api/sessions'
import { halls } from '~/api/halls'

export default {
  components: {
    BIconMoonStars,
    BIconSun,
  },
  data: () => {
    return {
      darkTheme: false,
      filter: '',
    }
  },
  methods: {
    changeColorTheme() {
      if (this.darkTheme) {
        // black theme-------------------------------------------
        document.documentElement.style.setProperty(
          '--films-bg-color',
          '#122e46'
        )
        document.documentElement.style.setProperty(
          '--films-card-color',
          '#ff7643'
        )
        document.documentElement.style.setProperty(
          '--films-text-color',
          '#e39015'
        )
        document.documentElement.style.setProperty(
          '--user-info-card-color',
          '#ffea40'
        )
      } else {
        // white theme-------------------------------------------
        document.documentElement.style.setProperty(
          '--films-bg-color',
          '#fff'
        )
        document.documentElement.style.setProperty(
          '--films-card-color',
          '#ffffb0'
        )
        document.documentElement.style.setProperty('--films-text-color', '#000')
        document.documentElement.style.setProperty(
          '--user-info-card-color',
          '#ffffb0'
        )
      }
    },
  },
  watch: {
    filter() {
      this.$store.commit('setFilteredFilms', this.filter)
    },
    darkTheme() {
      this.$store.commit('setBlackTheme', this.darkTheme)
      localStorage.setItem('black-theme', JSON.stringify(this.darkTheme))
      this.changeColorTheme()
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

    //  selected sessions
    const selectedSessions = localStorage.getItem('selected-sessions')
    if (selectedSessions) {
      const sessions = JSON.parse(selectedSessions)
      sessions.forEach((t) => {
        this.$store.commit('setSelectedSessions', t)
      })
    }

    //  color theme
    const loadedTheme = localStorage.getItem('black-theme')
    if (loadedTheme) {
      const parsedLoadedTheme = JSON.parse(loadedTheme)
      this.$store.commit('setBlackTheme', parsedLoadedTheme)
      this.darkTheme = parsedLoadedTheme
    }
    this.changeColorTheme()
  },
}
</script>

<style scoped>
.header-navbar {
  padding: 0px 40px;
  background-color: #000;
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
  white-space: nowrap;
}
.header-navbar__content {
  align-items: center;
  display: flex;
  gap: 20px;
}
.header-navbar__switcher {
  display: flex;
  align-items: center;
  gap: 3px;
}
@media (max-width: 1050px) {
  .header-navbar {
    padding: 0px 20px;
  }
  .header-navbar__filter {
    width: 130px;
  }
}
@media (max-width: 1050px) {
  .header-navbar__content {
    align-items: center;
    display: flex;
    gap: 10px;
  }
  .header-navbar__switcher {
    gap: 0px;
  }
}
@media (max-width: 500px) {
  .header-navbar__filter {
    width: 100px;
  }
}
</style>
