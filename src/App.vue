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
      let seriesEndPoint = store.seriesUrl;

      // se si avvia una ricerca da appserch aggiungiamo la query di richiesta
      if (store.searchMovie !== '') {
        endPoint += `?movie=${store.searchMovie}`;
        seriesEndPoint += `?movie=${store.searchMovie}`;
      
      }



      Promise.all([
        axios.get(endPoint),
        axios.get(seriesEndPoint)
      ])
      .then(responses => {
        store.movieList = responses[0].data.results;
        store.seriesList = responses[1].data.results;
      })
      .catch(err => {
        console.log(err);
      });
    },
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
