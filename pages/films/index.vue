<template>
  <div class="films">
    <div class="films__body">
      <div
        class="film-card"
        v-for="(film, idx) in $store.getters.getFilteredFilms"
        :key="idx"
      >
        <div class="film-card__img">
          <img :src="film.img" :alt="film.name" />
        </div>
        <div class="film-card__name">
          {{ film.name }}
        </div>
        <div class="film-card__button">
          <button class="btn btn-primary" @click="switchToCurrentFilm(film.id)">
            More info
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      films: [],
    }
  },
  methods: {
    switchToCurrentFilm(id) {
      this.$router.push(`/films/${id}`)
    },
  },
}
</script>

<style scoped>
.films {
  padding: 40px;
}
.films__body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px 15px;
}

.film-card {
  background-color: #f3f3f3;
  display: flex;
  flex: 0 0 24%;
  flex-direction: column;
  border-bottom: 3px solid #000;
}
.film-card__img img {
  object-fit: cover;
  width: 100%;
  height: 220px;
  margin-bottom: 10px;
}
.film-card__img {
  display: block;
  align-items: center;
}
.film-card__name {
  display: flex;
  margin: 0px 0px 5px 20px;
}
.film-card__button {
  margin: 0px 0px 20px 20px;
}
.jcCenter {
  justify-content: center;
}
/* adaptive */
@media (min-width: 1700px) {
  .film-card {
    flex: 0 0 400px;
  }
  .films__body {
    justify-content: center;
  }
}
@media (max-width: 1350px) {
  .film-card {
    flex: 0 0 32%;
  }
  .film-card__img img {
    object-fit: cover;
    height: 220px;
  }
}

@media (max-width: 1050px) {
  .films__body {
    display: block;
  }
  .film-card {
    display: block;
    margin-bottom: 20px;
  }
  .film-card__img img {
    width: 100%;
    height: auto;
  }
  .films {
    padding: 20px;
  }
}
</style>
