<template>
    <li v-text="title"
        v-show="showTilesForGroup"
        :class="['text-center','col-xs-4 col-sm-3 col-md-3 col-lg-3', 'wallTile', {active:getActiveStatus}, 'group_' + groupId]"
        @click="toggleActiveStatus"
    >

    </li>

</template>

<script>
    export default {

        props: {

            title: {
                type: String,
                required: true
            },

            groupId: {
                type: Number,
                required:true
            },

            id: {
                type: Number,
                required: true
            },

        },

        methods: {
            toggleActiveStatus() {
                let payload = {tileId:this.id, groupId: this.groupId};
                if(this.getActiveStatus) {
                    this.$store.dispatch('deSelectTile',payload);
                } else {
                    this.$store.dispatch('selectTile',payload);
                }
            },
        },

        computed: {
            getActiveStatus() {
                return this.$store.getters.isActiveTile(this.id);
            },

            getActiveTiles() {
                return this.$store.getters.activeTiles;
            },
            showTilesForGroup() {
                return this.$store.getters.showTilesForGroup(this.groupId);
            }
        }

    };

</script>