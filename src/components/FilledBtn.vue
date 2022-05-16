<template>
  
    <button class="btn text-uppercase text-white pb-2">{{text}}</button>

</template>

<script>
export default {
    name: 'FilledBtn',
    props: {
        text: String
    }
}
</script>

<style lang="scss" scoped>

    button {
        background-color: $blue_lagoon;
    }

</style>