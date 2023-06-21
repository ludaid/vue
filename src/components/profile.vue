<template>
<h1>Profile page</h1>
<h2>{{ name }}</h2>
</template>
<script>
export default{
    name:'ProfileComponent',
    props:['name']
}
</script>