<template>
  
    <div class="jumbotron">

        <div class="container d-flex flex-column h-100">

            <div class="jumbotron_header row py-3">

                <div class="col">
                    <NexGen />
                </div>

                <div class="col">

                    <nav class="text-uppercase d-flex justify-content-between align-items-center">
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Services</a>
                        <a href="">Team</a>
                        <a href="">Blog</a>
                        <a href=""> <font-awesome-icon icon="fa-regular fa-user" /> </a>
                        <RoundedButton text='Get in touch' class="filled_btn text-white" />
                    </nav>

                </div>

            </div>

            <div class="jumbotron_main text-white text-center d-flex justify-content-center align-items-center">

                <div class="jumbtron_main_text">
                    <h1 class="mb-4">Financial risk</h1>

                    <span>The right outcomes depend on continuos rigor in governance, models, and</span>
                    <br>
                    <span>processes across the finance function</span>
                    <br>

                    <RoundedButton text='Get in touch' class="filled_btn text-white mt-5 mx-2" /> <RoundedButton text='Read more' class="border_btn text-white mt-5 mx-2" />

                </div>

            </div>

        </div>

    </div>

</template>

<script>
import RoundedButton from '@/components/RoundedButton.vue';
import NexGen from '@/components/NexGenComponent.vue';

export default {
    name: 'JumbotronComponent',
    components: {
        RoundedButton,
        NexGen
    }
}
</script>

<style lang="scss" scoped>

    .filled_btn {
        background-color: $blue_lagoon;
    }

    .border_btn {
        border: 1px solid $blue_lagoon;
    }

    .jumbotron {
        height: 900px;
        background:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(@/assets/img/images/bg-2.jpg);

        h1 {
            font-weight: 900;
            font-size: 4rem;
        }

        .jumbotron_header {
            height: 5%;

            nav {

            a {
                text-decoration: none;
                color: $white;
                margin: 0 0.5rem;
            }

            button {
                background-color: $blue_lagoon;
            }

            }
        }

        .jumbotron_main {
            height: 95%;
        }

        
    }

</style>