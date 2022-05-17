<template>
  
    <button class="btn text-uppercase text-white pb-2">{{text}}</button>

</template>

<script>
export default {
    name: 'RoundedButton',
    props: {
        text: String
    }
}
</script>

<style lang="scss" scoped>

    button {
        border: 1px solid $blue_lagoon;
    }

</style>