<template>
    <input
        v-model="text"
        v-on:input="changeText"
        placeholder="Search episode or reference"
    >
</template>

<script>
import store from '../store'
import router from '../router'

export default {
    name: 'SearchBar',
    methods: {
        changeText: function (){
            store.commit('changeSearch', this.text);
            router.push("/");
        }
    }
}
</script>

<style scoped>
input {
    padding: 6px;
    border: 1em, black;
    margin-top: 8px;
    margin-right: 16px;
    font-size: 17px;
    width: 100%;
}
</style>
