<template>
  
    <div class="jumbotron">

        <div class="container d-flex flex-column h-100">

            <div class="jumbotron_header row py-3">

                <div class="col">
                    <img src="@/assets/img/images/image.png" alt="">
                </div>

                <div class="col">

                    <nav class="text-uppercase">
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Services</a>
                        <a href="">Team</a>
                        <a href="">Blog</a>
                        <a href=""> <font-awesome-icon icon="fa-regular fa-user" /> </a>
                        <RoundedButton text='Get in touch' class="filled_btn" />
                    </nav>

                </div>

            </div>

            <div class="jumbotron_main text-white text-center d-flex justify-content-center align-items-center">

                <div class="jumbtron_main_text">
                    <h1>Financial risk</h1>

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, temporibus.</p>

                    <RoundedButton text='Get in touch' class="filled_btn" /> <RoundedButton text='Read more' class="border_btn" />

                </div>

            </div>

        </div>

    </div>

</template>

<script>
import RoundedButton from '@/components/RoundedButton.vue';

export default {
    name: 'JumbotronComponent',
    components: {
        RoundedButton
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
        background-image: url(@/assets/img/images/bg-2.jpg);

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