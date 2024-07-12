<script>
import { store } from '../store';
export default {
    name: 'AppHeader',
    data() {
        return {
             store
        }
     },
}
</script>

<template>
    <div class="container">
        <h1>Boolfix</h1>
        <div>
            <input type="text" placeholder="Search">
            <button>Search</button>
        </div>
    </div>
    
</template>

<style scoped lang="scss">
@use '../style/general.scss' as *;
@use '../style/partials/mixins' as *;

.container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #262525;

    h1{
        color: red;
        font-size: 70px;
    }

    input{
        padding: 0.5rem;
        border: 3px solid  red;
        border-radius: 0.7rem;
        margin-right:1rem;
    }

    button{
        padding:0.5rem;
        border:3px solid  red;
        background-color:transparent;
        color:  red;
        font-weight: bold;
        border-radius:0.7rem;
        letter-spacing: 0.1rem;
        cursor: pointer;
    }
}

</style>