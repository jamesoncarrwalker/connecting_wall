<template>
    <li v-text="title"
    :class="['text-center','col-xs-4 col-sm-3 col-md-3 col-lg-3', 'wallTile', {active:isActive}]"
    @click="toggleActiveStatus"
    >

    </li>

</template>

<script>
    export default {

        components: {

        },

        props: {

            title: {
                type: String,
                required: true
            },

            group: {
                type: String,
                required:true
            },

            id: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                isActive: false
            }
        },

        methods: {
            toggleActiveStatus() {
                if(this.getActiveStatus) {
                    console.log('active');
                } else {
                   console.log('deactive');
                }

                this.isActive = !this.isActive;
            }
        },

        computed: {
            getActiveStatus() {
                return this.isActive;
            }
        }

    };

</script>