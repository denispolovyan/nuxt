<template>
  <div class="films">
    <div class="films__body">
      <div class="film-card" v-for="film in films" :key="film">
        <div class="film-card__img">
          <img :src="film.img" :alt="film.name" />
        </div>
        <div class="film-card__name">
          {{ film.name }}
        </div>
        <div class="film-card__button">
          <button class="btn btn-primary">More info</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { films } from '~/api/films'
export default {
  data: () => {
    return {
      films: [],
    }
  },
  created() {
    this.films = films
    console.log(films)
  },
}
</script>

<style scoped>
.films {
}
.films__body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px 5px;
}

.film-card {
  display: flex;
  flex: 0 0 24%;
  flex-direction: column;
  border: 1px solid #7a7672;
  border-radius: 10px;
}
.film-card__img img {
  width: 100%;
  height: auto;
  border-radius: 10px 10px 0px 0px;
}
.film-card__img {
  flex: 1 1 100%;
  align-items: center;
}
.film-card__name {
  display: flex;
  margin: 0px 0px 5px 20px;
}
.film-card__button {
  margin: 0px 0px 20px 20px;
}

/* adaptive */
@media (max-width: 1350px) {
  .film-card {
    flex: 0 0 32%;
  }
  .film-card__img img {
    width: 100%;
    height: auto;
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
}
</style>
