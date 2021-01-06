<template>
    <input
        v-model="text"
        placeholder="Search..."
    >
</template>

<script>
export default {
    name: 'SearchBar'
}
</script>

<style scoped>
input {
    padding: 6px;
    border: 1em, black;
    margin-top: 8px;
    margin-right: 16px;
    font-size: 17px;
}
</style>
