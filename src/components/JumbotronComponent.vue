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
                        <FilledBtn text='Get in touch' />
                    </nav>

                </div>

            </div>

            <div class="jumbotron_main text-white text-center d-flex justify-content-center align-items-center">

                <div class="jumbtron_main_text">
                    <h1>Financial risk</h1>

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, temporibus.</p>

                    <FilledBtn text='Get in touch' /> <BorderBtn text='Read more' />

                </div>

            </div>

        </div>

    </div>

</template>

<script>
import FilledBtn from '@/components/FilledBtn.vue';
import BorderBtn from '@/components/BorderBtn.vue';

export default {
    name: 'JumbotronComponent',
    components: {
        FilledBtn,
        BorderBtn
    }
}
</script>

<style lang="scss" scoped>

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