<template>
  
    <header class="bg-dark">

        <div class="container">
            <div class="row py-3">

                <div class="col d-flex align-items-center">

                    <font-awesome-icon icon="fa-solid fa-clock" />
                    <span class="mx-2">Open Hours: Mon - Sat - 9:00 - 18:00</span>

                </div>


                <div class="col d-flex justify-content-end align-items-center">

                    <div>

                        <font-awesome-icon icon="fa-solid fa-phone" />
                        <span class="mx-2">+1 (305) 1234-5678</span>

                    </div>

                    <div class="mx-4">

                        <font-awesome-icon icon="fa-solid fa-envelope" />
                        <span class="mx-2">hello@example.com</span>

                    </div>

                    <div>

                        <font-awesome-icon icon="fa-brands fa-facebook-f" />
                        <font-awesome-icon icon="fa-brands fa-twitter" class="mx-4" />
                        <font-awesome-icon icon="fa-brands fa-linkedin-in" />

                    </div>

                </div>

            </div>
        </div>

    </header>

</template>

<script>
export default {
    name: 'HeaderComponent'
}
</script>

<style lang="scss" scoped>

    header {
        color: $gray_nurse;
    }

</style>