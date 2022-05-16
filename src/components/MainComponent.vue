<template>
  
    <main>

        <Jumbotron/>

        <section class="section_intro_video py-5 text-center">
            
            <div class="container text-center">

                <span class="small_title">Introduction Video</span>

                <h2>Advisory <span class="styled_title">Performance</span> </h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum inventore labore omnis aut cumque voluptates et enim cupiditate doloribus eius.</p>

                <div class="video position-relative">
                    <img class="mw-100" src="@/assets/img/images/video-1.jpg" alt="">
                    <font-awesome-icon icon="fa-solid fa-play" class="play_btn position-absolute top-50 start-50 translate-middle"/>
                </div>
                
            </div>

        </section>

        <section class="section_results py-5 text-center text-white">

            <div class="container">

                <span class="small_title">What are we doing</span>

                <h2> <span class="squared_title">Results</span> in numbers </h2>

                <div class="row row-cols-4 py-5">

                    <div class="result">
                        <h4>128</h4>
                        <span>Certifications</span>
                    </div>

                    <div class="result">
                        <h4>230</h4>
                        <span>Employees</span>
                    </div>

                    <div class="result">
                        <h4>517</h4>
                        <span>Customers</span>
                    </div>

                    <div class="result">
                        <h4>94</h4>
                        <span>Countries Served</span>
                    </div>

                </div>

            </div>

        </section>

        <section class="section_services py-5">

            <div class="container">

                <span class="small_title">Our business areas</span>

                <h2 class="text-white"> Excellence in <span class="squared_title">Services</span> </h2>

                <div class="row">

                    <div class="col-9 d-flex align-items-center">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ad saepe nostrum facere quae odio dolor totam animi nihil. Pariatur ullam dolores voluptatibus repellendus molestias?</p>
                    </div>

                    <div class="col-3 d-flex justify-content-end align-items-center">
                        <BorderBtn text='See all' />
                    </div>

                </div>
                
                <div class="row gy-3">

                    <div class="col">

                      <div class="service_card p-4">

                             <div class="symbols my-3">

                                <font-awesome-icon icon="fa-solid fa-diagram-project" class="fs-1" />
                                <font-awesome-icon icon="fa-solid fa-arrow-right" />

                            </div>

                            <h4 class="text-white">Audit & Assurance</h4>

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, id.</p>

                        </div>

                    </div>

                    <div class="col">

                      <div class="service_card p-4">

                             <div class="symbols my-3">

                                <font-awesome-icon icon="fa-solid fa-diagram-project" class="fs-1" />
                                <font-awesome-icon icon="fa-solid fa-arrow-right" />

                            </div>

                            <h4 class="text-white">Audit & Assurance</h4>

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, id.</p>

                        </div>

                    </div>

                    <div class="col">

                      <div class="service_card p-4">

                             <div class="symbols my-3">

                                <font-awesome-icon icon="fa-solid fa-diagram-project" class="fs-1" />
                                <font-awesome-icon icon="fa-solid fa-arrow-right" />

                            </div>

                            <h4 class="text-white">Audit & Assurance</h4>

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, id.</p>

                        </div>

                    </div>

                    <div class="col">

                      <div class="service_card p-4">

                             <div class="symbols my-3">

                                <font-awesome-icon icon="fa-solid fa-diagram-project" class="fs-1" />
                                <font-awesome-icon icon="fa-solid fa-arrow-right" />

                            </div>

                            <h4 class="text-white">Audit & Assurance</h4>

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, id.</p>

                        </div>

                    </div>

                    <div class="col">

                      <div class="service_card p-4">

                             <div class="symbols my-3">

                                <font-awesome-icon icon="fa-solid fa-diagram-project" class="fs-1" />
                                <font-awesome-icon icon="fa-solid fa-arrow-right" />

                            </div>

                            <h4 class="text-white">Audit & Assurance</h4>

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, id.</p>

                        </div>

                    </div>

                    <div class="col">

                      <div class="service_card p-4">

                             <div class="symbols my-3">

                                <font-awesome-icon icon="fa-solid fa-diagram-project" class="fs-1" />
                                <font-awesome-icon icon="fa-solid fa-arrow-right" />

                            </div>

                            <h4 class="text-white">Audit & Assurance</h4>

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, id.</p>

                        </div>

                    </div>                
                    
                </div>

            </div>

        </section>

        <section class="py-5"></section>

        <section class="py-5"></section>

        <section class="py-5"></section>

        <section class="py-5"></section>

    </main>

</template>

<script>
import Jumbotron from '@/components/JumbotronComponent.vue'
import BorderBtn from '@/components/BorderBtn.vue'

export default {
    name: 'MainComponent',
    components: {
        Jumbotron,
        BorderBtn
    }
}
</script>

<style lang="scss" scoped>

    .small_title {
        text-transform: uppercase;
        color: $blue_lagoon;
        }

    .styled_title {
        color: $surfie_green;
        background-color: $gray_nurse;
        padding: 0 0.5rem;
    }

    .squared_title {
        background-color: $tradewind;
        opacity: 0.6;
    }

    section {
        color: $mid_gray;
    }

    .section_intro_video {

        .play_btn {
            z-index: 10;
            color: $gray_nurse;
            font-size: 5rem;
        }
    }

    .section_results {
        background-image: url(@/assets/img/images/bg-7.jpg);
        background-size: cover;

        .result {
            text-align: center;

            h4 {
                color: $surfie_green;
                font-size: 2rem;
            }

        }
    }

    .section_services {
        background-color: $woodsmoke;

        .service_card {
            background-color: $shark;
            border-radius: 0.5rem;

            .symbols {
                color: $surfie_green;
                display: flex;
                justify-content: space-between;
                
            }

        }
    }

</style>