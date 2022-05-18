<template>
  
    <button class="btn text-uppercase pb-2 px-4">{{text}}</button>

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

    button:hover {
        background-color: $blue_lagoon;
        color: white;
    }

</style>