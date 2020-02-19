<template>
        <button
        class="btn btn-lg"
        :class="buttonClasses"
        @click="reRoute"
        v-text="title">
        </button>
</template>

<script>
    export default {


        props: {
            navRoute:{
                type:String,
                required: true
            },

            title: {
                type:String,
                required:true
            },
            buttonClasses: {
                type:Array,
                default(){
                    return ['btn-success'];
                }
            }

        },

        methods: {
            reRoute() {
                this.$router.push({ name: this.navRoute })
            }

        },
        computed: {

        }

    };
</script>