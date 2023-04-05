<template>
  <div class="films">
	.films__body
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
