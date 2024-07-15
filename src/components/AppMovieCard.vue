<script>
export default {
    name: 'AppMovieCard',
    props: {
        info: Object,
    },
    methods: {
        getPosterUrl(path) {
            return `https://image.tmdb.org/t/p/w342${path}`;
        },
    }
}

</script>

<template>
    <div class="movie-card">
        <img :src="getPosterUrl(info.poster_path)" :alt="info.title" class="poster">
        <h1>{{info.title }}</h1>
        <div class="description">
          <h2>TITOLO:{{ info.title }}</h2>
          <h2>TITOLO ORIGINALE:{{ info.original_title }}</h2>
          <h2>VOTO:{{ info.vote_average }}</h2>
          <p>{{ info.overview }}</p>
        </div>
        <!-- <p>{{ info.overview }}</p> -->
    </div>
</template>

<style scoped lang="scss">
@use '../style/general.scss' as *;
@use '../style/partials/mixins' as *;


.movie-card {
  width: 350px;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
  text-align: center;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    transition: opacity 0.3s;
  }

  .description {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover .poster {
    opacity: 0;
  }

  &:hover .description {
    opacity: 1;
  }
}
</style>