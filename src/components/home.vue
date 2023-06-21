<template>
<h1>Home Component</h1>
<!-- <p>{{ $filters.currencyUSD(msg) }}</p> -->
<Profile v-bind:name=msg />
</template>
<script>

import Profile from './profile.vue';    
import api from "axios"

export default {
    name: "HomeComponent",
    components: { Profile },
    data() {
        return {
            msg: "hello iam from data variable"
        };
    },
    async mounted(){
        let result = await api.get("https://jsonplaceholder.typicode.com/posts")
        console.log(result);
    }
}
</script>
<style scoped>
h1{
    color: orange;
}
</style>