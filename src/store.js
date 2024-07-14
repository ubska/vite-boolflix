import { reactive } from "vue";

export const store = reactive({
    movieList: [],
    movieUrl: "https://api.themoviedb.org/3/search/movie?api_key=f0b7748fa82cf34a0c6ca4ee1867c220&query=movie",
    imageUrl: 'https://image.tmdb.org/t/p/w342',
});
