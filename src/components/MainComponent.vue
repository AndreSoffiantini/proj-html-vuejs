<template>
  
    <main>

        <Jumbotron/>

        <section class="section_intro_video py-5 text-center">
            
            <div class="container text-center p-5">

                <strong class="small_title">Introduction Video</strong>

                <h2 class="text-black my-3">Advisory <span class="light_bg_title">Performance</span> </h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum inventore labore omnis aut cumque voluptates et enim cupiditate doloribus eius.</p>

                <div class="video position-relative p-5">
                    <img class="mw-100" src="@/assets/img/images/video-1.jpg" alt="">
                    <font-awesome-icon icon="fa-solid fa-play" class="play_btn position-absolute top-50 start-50 translate-middle"/>
                </div>
                
            </div>

        </section>

        <section class="section_results py-5 text-center text-white">

            <div class="container">

                <span class="small_title">What are we doing</span>

                <h2> <span class="dark_bg_title">Results</span> in numbers </h2>

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

                <h2 class="text-white"> Excellence in <span class="dark_bg_title">Services</span> </h2>

                <div class="row">

                    <div class="col-9 d-flex align-items-center">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ad saepe nostrum facere quae odio dolor totam animi nihil. Pariatur ullam dolores voluptatibus repellendus molestias?</p>
                    </div>

                    <div class="col-3 d-flex justify-content-end align-items-center">
                        <RoundedButton text='See all' class="border_btn"/>
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

        <section class="section_team py-5">

            <div class="container p-5">
                <div class="row">

                    <div class="col-9">

                        <strong class="small_title">We like what we do</strong>

                        <h2 class="text-black my-3"> <span class="light_bg_title">Team</span> of Experts </h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum inventore labore omnis aut cumque voluptates et enim cupiditate doloribus eius.</p>

                        <div class="row row-cols-2">

                            <div class="team_member_card col border-white" v-for="member in team_members" :key="'team member ' + member.id">

                                <div class="card mb-3" style="max-width: 540px;">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src="@/assets/img/images/team-1.jpg" class="img-fluid rounded-start" :alt="'team member ' + member.id">
                                        </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h4 class="card-title text-black">{{member.name}}</h4>
                                            <p class="card-text text-uppercase"><small class="text-muted">{{member.role}}</small></p>
                                            <div>

                                                <font-awesome-icon icon="fa-brands fa-facebook-f" class="rounded_icon"/>
                                                <font-awesome-icon icon="fa-brands fa-twitter" class="rounded_icon mx-4" />
                                                <font-awesome-icon icon="fa-brands fa-linkedin-in" class="rounded_icon"/>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            </div>

                        </div>

                    </div>

                    <div class="col-3">

                        <h4 class="text-white">President speech</h4>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, molestias!</p>

                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ipsum quos voluptatibus nam quis rerum laborum incidunt minus rem pariatur!</p>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, labore!</p>

                        <strong class="text-white">T. Johnson</strong>

                    </div>

                </div>
            </div>

        </section>

        <section class="section_news py-5">

            <div class="container p-5">

                <strong class="small_title">Our editorial content</strong>
                <h2 class="text-black my-3">Latest <span class="light_bg_title">News</span> </h2>

                <div class="row">

                    <div class="col-9 d-flex align-items-center">
                        <p>Every week we publish content about what is best in the business world</p>
                    </div>

                    <div class="col-3 d-flex justify-content-end align-items-center">
                        <RoundedButton text='See all' class="filled_btn"/>
                    </div>

                </div>

                <div class="row row-cols-3 my-4">

                    <div class="col">

                        <div class="news_card card text-white p-0">
                            <img src="@/assets/img/images/news-1.jpg" class="card-img">
                            <div class="card-img-overlay d-flex flex-column-reverse">
                                <h5 class="card-title text-center">Increasing creativity is possible for everyone</h5>
                            </div>
                        </div>

                    </div>

                    <div class="col">

                        <div class="news_card card text-white p-0">
                            <img src="@/assets/img/images/news-2.jpg" class="card-img">
                            <div class="card-img-overlay d-flex flex-column-reverse">
                                <h5 class="card-title text-center">Because market research is part of the business plan</h5>
                            </div>
                        </div>

                    </div>

                    <div class="col">

                        <div class="news_card card text-white p-0">
                            <img src="@/assets/img/images/news-3.jpg" class="card-img">
                            <div class="card-img-overlay d-flex flex-column-reverse">
                                <h5 class="card-title text-center">Working from home is now a trend</h5>
                            </div>
                        </div>

                    </div>               
                    
                </div>

            </div>

        </section>

        <section class="section_newsletter py-5">

            <div class="container p-5">

                <div class="row row-cols-2">

                    <div class="col">

                        <strong class="small_title">Newsletter</strong>

                        <h2 class="text-white my-3"> <span class="dark_bg_title">Know</span> First </h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt doloremque totam quod atque perspiciatis veniam?</p>

                    </div>

                    <div class="col">

                        <form>
                            <input type="text" class="form-control" placeholder="Name">

                            <input type="email" class="form-control my-3" placeholder="Email">
        
                            <RoundedButton class="filled_btn" text="Subscribe" />
                        </form>

                    </div>

                </div>

            </div>

        </section>

        <section class="section_message py-5">

            <div class="container">

                <div class="row">

                    <div class="col-8">

                        <strong class="small_title">Send a message</strong>
                        <h2 class="text-black my-3">Get in <span class="light_bg_title">Touch</span> </h2>
                        <p>We will respond to your message as soon as possible</p>

                        <form>

                            <div class="row gy-4">

                                <div class="col-6">
                                    <input type="text" class="form-control" placeholder="Name">
                                </div>

                                <div class="col-6">
                                    <input type="email" class="form-control" placeholder="Email">
                                </div>

                                <div class="col-6">
                                    <input type="phone" class="form-control" placeholder="Phone">
                                </div>

                                <div class="col-6">
                                    <select  class="form-select" > 
                                        <option selected disabled value="">More info</option>
                                    </select>
                                </div>

                                <div class="col">
                                    <textarea class="form-control" placeholder="Message" cols="30" rows="10"></textarea>
                                </div>

                            </div>                            
        
                            <RoundedButton class="filled_btn my-4" text="Send" />
                        </form>

                    </div>

                    <div class="col-4 px-5">

                        <h3 class="text-black mb-3">Example Inc.</h3>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                        <p class="my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

                        <div class="info">
                            <font-awesome-icon icon="fa-solid fa-phone mt-4" class="rounded_icon"/> <span> +1 (305) 1234-5678</span>
                        </div>

                        <div class="info">
                            <font-awesome-icon icon="fa-solid fa-envelope" class="rounded_icon my-4"/> <span> hello@example.com</span>
                        </div>

                        <div class="info">
                            <font-awesome-icon icon="fa-solid fa-location-dot" class="rounded_icon"/> <span> Main Avenue, 987</span>
                        </div>

                        <RoundedButton text="View Map" class="border_btn my-4 text_blue_lagoon" />

                    </div>

                </div>

            </div>

        </section>

    </main>

</template>

<script>
import Jumbotron from '@/components/JumbotronComponent.vue'
import RoundedButton from '@/components/RoundedButton.vue'

export default {
    name: 'MainComponent',
    components: {
    Jumbotron,
    RoundedButton
},
    data() {
        return {
           team_members: [
               {
                   id: '1',
                   name: 'David Cooper',
                   role: 'Cto & Co-Founder'
               },
               {
                   id: '2',
                   name: 'Oliver Jones',
                   role: 'Chief Procurement'
               },
               {
                   id: '3',
                   name: 'Emma Lopez',
                   role: 'Chief Marketing'
               },
               {
                   id: '4',
                   name: 'T. Johnson',
                   role: 'CEO & President'
               }
           ] 
        }
    }
}
</script>

<style lang="scss" scoped>

    .small_title {
        text-transform: uppercase;
        color: $fountain_blue;
        font-size: 0.75rem;
    }

    .light_bg_title {
        color: $surfie_green;
        background-color: #52b9bb3f;
        padding: 0 0.5rem;
        border-radius: 0.25rem;
    }

    .dark_bg_title {
        background-color: #60a9ad3a;
        padding: 0 0.5rem;
        border-radius: 0.25rem;
    }

    .rounded_icon {
        color: $surfie_green;
        background-color: #52b9bb3f;
        border-radius: 100%;
        padding: 0.75rem;
        aspect-ratio: 1;
    }

    .filled_btn {
        background-color: $blue_lagoon;
    }

    .border_btn {
        border: 1px solid $blue_lagoon;
    }

    .text_blue_lagoon {
        color: $blue_lagoon;
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

    .section_team {

        .col-3 {
            background-color: $surfie_green;
            color: $gray_nurse;
            border-radius: 0.25rem;
            padding: 1.3rem;
        }

    }

    .section_news {
        background-color: $gray_nurse;

        .news_card {

            border-radius: 0.75rem;

            img {
                filter: brightness(0.4);
                border-radius: 0.75rem;
            }
        }
    }

    .section_newsletter {
        background-color: $woodsmoke;

        input {
            background-color: $shark;
            border: 1px solid $woodsmoke;
            width: 50%;
        }
    }

    .section_message {
        
        input, select, textarea {
            background-color: $silver_sand;
        }

    }

</style>