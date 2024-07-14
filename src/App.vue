<script>

import axios  from 'axios';

import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue';
// import dello store
import { store } from './store';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    gerMovieCard() {
      let endPoint = store.movieUrl;

      // se si avvia una ricerca da appserch aggiungiamo la query di richiesta
      if (store.searchMovie !== '') {
        endPoint += `?movie=${store.searchMovie}`
      }



      axios.
        get(endPoint)
        .then(res => {
          console.log(res.data.results);
          store.movieList = res.data.results;
        })
        .catch (
          err => {
          console.log(err);
        })
    }
  },
  created() {
    this.gerMovieCard();
  }
}
</script>

<template>

  <AppHeader message = 'BOOLFIX' @search="gerMovieCard"/>
  <main>
      <AppMain/>
  </main>
</template>

<style scoped>

</style>
