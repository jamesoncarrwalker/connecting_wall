<template>
    <loading :v-if="isLoading"></loading>

</template>

<script>
    import Loading from './Loading.vue';

    export default {

        components: {
            Loading
        },

        props: {
            gameId: {
                type:Number,
                default: 0
                //not required, will load the default game
            }
        },

        methods: {
            initWall() {
                //
            },
            setLoading(status) {
                this.loading = status;
            }

        },
        computed: {
            isLoading() {
                return this.loading;
            }
        },
        data() {
          return {
              groups: {},
              loading: true
          }
        },

        created() {
            this.initWall();
        }

    };


</script>