<template>
    <div :class="getFullWidthClasses">
        <loading v-if="isLoading"></loading>


        <ul v-if="!isLoading" class="list-unstyled list-inline center-block "
        :class="getFullWidthClasses">
            <tile  v-for="tile, index in getTiles"
                   :title="tile.clue"
                   :groupId="tile.groupId"
                   :id="tile.id"
                   :key="index"
            ></tile>
        </ul>



    </div>

</template>

<script>
    import Loading from './Loading.vue';
    import Tile from './Tile.vue';

    export default {

        components: {
            Loading,
            Tile
        },

        methods: {
            initWall() {
                if(this.getTiles.length) {
                    this.loading = false;
                }
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
                return this.$store.getters.getSelectableTiles;
            },
            groupFound() {

            },
            checkSelectedItems() {
                return this.$store.getters.selectedTilesCount === 4;
            },

        },
        data() {
            return {
                loading:true,
            }
        },

        created() {
            this.initWall();

        },
        watch: {
            // whenever question changes, this function will run
            checkSelectedItems: function () {
                if(this.checkSelectedItems && this.$store.getters.selectionsAreSingleGroup) {
                    this.$store.dispatch('groupFound');
                } else {
                    this.$store.dispatch('clearSelectedTiles');
                }
            }
        }

    };


</script>