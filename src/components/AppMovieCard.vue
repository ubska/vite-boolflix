<script>
export default {
    name: 'AppMovieCard',
    props: {
        info: Object,
    },
    methods: {
        imageUrl() {
            return `https://image.tmdb.org/t/p/w342{this.info.poster_path}`;
        },
    }
}

</script>

<template>
    <div class="movie-card">
        <img :src="imageUrl" :alt="info.title">
        <h1>{{info.title }}</h1>
        <p>{{ info.overview }}</p>
    </div>
</template>

<style scoped lang="scss">
@use '../style/general.scss' as *;
@use '../style/partials/mixins' as *;


.movie-card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
  }

  h1 {
    font-size: 1.5rem;
    margin: 0.5rem 0;
  }

  p {
    font-size: 1rem;
    color: #666;
  }
}
</style>