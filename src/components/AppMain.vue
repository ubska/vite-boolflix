<script>
import AppMovieCard from './AppMovieCard.vue';
import { store } from '../store';

export default {
    name: 'AppMain',
    components: {
        AppMovieCard,
    },
    data() {
        return {
            store,
        };
    },

};
</script>

<template>
    <div class="container">
        <div class="container">
             <!-- componente card dei film -->
            <div class="card" v-for="movie in store.movieList" :key="movie.id">
            <AppMovieCard :info="movie"/>
        </div>
    </div>
       
         
    </div>
</template>

<style scoped lang="scss">
@use '../style/general.scss' as *;
@use '../style/partials/mixins' as *;

.container{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>