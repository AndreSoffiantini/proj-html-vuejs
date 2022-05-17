<template>
  
    <footer>

        <div class="footer_main py-5">

            <div class="container py-5">
                <div class="row row-cols-4">

                    <div class="col">

                        <h2 class="text-white mb-3">NexGen</h2>

                        <p class="my-4">A functional HTML Template for Corporate & Business</p>

                        <div class="info">
                            <font-awesome-icon icon="fa-solid fa-phone mt-4"/> <span class="mx-2"> +1 (305) 1234-5678</span>
                        </div>

                        <div class="info my-3">
                            <font-awesome-icon icon="fa-solid fa-envelope"/> <span class="mx-2"> hello@example.com</span>
                        </div>

                        <div class="info">
                            <font-awesome-icon icon="fa-solid fa-location-dot"/> <span class="mx-2"> Main Avenue, 987</span>
                        </div>

                        <RoundedButton text="View Map" class="border_btn my-4 text-white" />

                    </div>

                    <div class="col" v-for="section in sections" :key="section.title">

                        <div class="section_card h-100 p-4">

                            <h4 class="text-white">{{section.title}}</h4>

                            <div class="section_element my-2" v-for="element in section.elements" :key="element">

                                <font-awesome-icon icon="fa-solid fa-arrow-right"/> 
                                <span class="mx-2"> {{element}}</span>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>

        <div class="footer_footer py-3 bg-black">
            
            <div class="container d-flex justify-content-between pt-2">

                <p>Enjoy the low price. We are tracking any intention of piracy.</p>

                <p>© 2020 NEXGEN is Proudly Powered by <span class="text_blue_lagoon">Codings</span></p>

            </div>

        </div>

    </footer>

</template>

<script>
import RoundedButton from '@/components/RoundedButton.vue'

export default {
    name: 'FooterComponent',
    components: {
        RoundedButton
    },
    data() {
        return {
            sections: [
                {
                    title: 'About',
                    elements: ['The Company', 'Institutional', 'Social & Events', 'Innovation', 'Environment', 'Technology']
                },
                {
                    title: 'Services',
                    elements: ['Audit & Assurance', 'Financial Advisory', 'Analytics M&A', 'Middle Marketing', 'Legal Consulting', 'Regulatory Risk']
                },
                {
                    title: 'Support',
                    elements: ['Responsibility', 'Terms of Use', 'About Cookies', 'Privacy Policy', 'Accessibility', 'Information']
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

    .border_btn {
        border: 1px solid $blue_lagoon;
    }

    .text_blue_lagoon {
        color: $blue_lagoon;
    }
    
    footer{
        color: $salt_box;

        .footer_main {
            background-image: url(@/assets/img/images/bg-7.jpg);
            background-size: cover;
            background-position: center;

            .section_card {
                background-color: $shark;
                border-radius: 0.5rem;
            }

        }
    } 

</style>