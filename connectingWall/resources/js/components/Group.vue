<template>
    <ul  class="list-unstyled list-inline center-block">
        <tile  v-for="tile, index in tiles"
               :title="tile.clue"
               :groupId="tile.groupId"
               :id="tile.id"
               :solved="solved"
               :key="index"
        ></tile>

    </ul>

</template>

<script>
    import Tile from './Tile.vue';

    export default {

        components: {
            Tile
        },

        props: {
            tiles: {
                type:Array,
                required:true
            },

            solved: {
                type:Boolean,
                default: false
            }
        },

        methods: {

        },
        computed: {

        }

    };
</script>