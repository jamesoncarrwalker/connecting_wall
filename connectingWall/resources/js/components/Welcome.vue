<template>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 margin-top-gone">
            <h2 class="margin-top-gone">Welcome, to Bro-nly connect!</h2>
            <h3>The cheap and cheerful rip off of the successful BBC series!</h3>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 margin-top-gone">
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <navigation-button
                    navRoute="wall"
                    title="Let's Play Bro-nly connect"
                >
                </navigation-button>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <navigation-button
                    navRoute="connections"
                    title="Check your connections"
                    :buttonClasses="['btn-danger']"
                >
                </navigation-button>
            </div>
        </div>



    </div>
</template>

<script>
    import NavigationButton from './NavigationButton.vue';

    export default {

        components: {
            NavigationButton
        },

        props: {

        },

        methods: {

        },
        computed: {
            wallSolved() {
                return this.$store.getters.wallSolved;
            }
        }

    };
</script>