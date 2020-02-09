<template>

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

            groupId: {
                type: Number,
                required:true
            },

            tileId: {
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
                    // will add the id to the store
                } else {
                    //will remove id from the store
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