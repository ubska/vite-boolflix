<script>
import flagEn from '../assets/flags/en.png';
import flagIT from '../assets/flags/it.png';
import flagJa from '../assets/flags/ja.png';
import flagFr from '../assets/flags/fr.png'
import flagDefault from '../assets/flags/default.png';

export default {
    name: 'AppMovieCard',
    props: {
        info: Object,
    },
    methods: {
        getPosterUrl(path) {
            return `https://image.tmdb.org/t/p/w342${path}`;
      },
       getFlag(language) {
        const flags = {
            en: flagEn,
            it: flagIT,
            ja: flagJa,
            fr: flagFr,
        };
         return flags[language] || flagDefault;
      },

      // Dividi il voto per 2 e arrotonda per eccesso
      convertVote(vote) {
        return Math.ceil(vote / 2);
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
          <!-- flag della lingua -->
          <img :src="getFlag(info.original_language)" :alt="info.original_language" class="flag">


          <h2>VOTO: 
                <span v-for="n in 5" :key="n">
                    <i :class="n <= convertVote(info.vote_average) ? 'fas fa-star' : 'far fa-star'"></i>
                </span>
            </h2>
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
  .flag {
    width: 80px;
    height: 50px;
    margin-top: 1rem;
  }
}
</style>