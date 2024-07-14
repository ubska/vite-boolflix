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
      axios.
        get(store.movieUrl)
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

  <AppHeader message = 'BOOLFIX'/>
  <main>
      <AppMain/>
  </main>
</template>

<style scoped>

</style>
