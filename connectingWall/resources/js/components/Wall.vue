<template>
    <div :class="getFullWidthClasses">
        <loading v-if="isLoading"></loading>


        <ul v-if="!isLoading" class="list-unstyled list-inline center-block "
        :class="getFullWidthClasses">
            <tile  v-for="tile,index in getTiles"
                   :title="tile.clue"
                   :group="tile.group"
                   :id="tile.id"
                   :key="index"

            ></tile>
        </ul>



    </div>

</template>

<script>
    import {mapGetters} from 'vuex';
    import Loading from './Loading.vue';
    import Tile from './Tile.vue';

    export default {

        components: {
            Loading,
            Tile
        },

        methods: {
            initWall() {
                console.log('initing wall');
            },
            setLoading(status) {
                this.loading = status;
            }

        },
        computed: {

            isLoading() {
                return this.loading;
            },
            getFullWidthClasses() {
                return 'col-xs-12 col-sm-12 col-md-12 col-lg-12';
            },
            getTiles() {
                return this.$store.state.clues;
            },

        },

        created() {
            this.initWall();
            console.log('tiles: ',this.getTiles);
        }

    };


</script>