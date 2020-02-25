<template>
    <div :class="getFullWidthClasses">
        <loading v-if="isLoading"></loading>

        <group v-if="!isLoading"
               :tiles="getCluesForSolvedGroups"
               :solved="true">

        </group>

        <group v-if="!isLoading"
               :tiles="getCluesForUnsolvedGroups">

        </group>

    </div>

</template>

<script>
    import { mapGetters,mapActions } from 'vuex';
    import Loading from './Loading.vue';
    import Group from './Group.vue';


    export default {

        components: {
            Loading,
            Group
        },

        methods: {
            initWall() {
                if(this.getCluesForUnsolvedGroups.length) {
                    this.setLoadingStatus(false);
                }
            },
            ...mapActions({
                setLoadingStatus: 'shared/setLoadingStatus',
                groupFound: 'wall/groupFound',
                clearSelectedTiles: 'wall/clearSelectedTiles',
                completeWall: 'wall/completeWall'
            })
        },
        computed: {

                ...mapGetters({
                    getFullWidthClasses: 'shared/getFullWidthClasses',
                    isLoading: 'shared/getLoadingStatus',
                    getCluesForUnsolvedGroups: 'wall/getCluesForUnsolvedGroups',
                    getCluesForSolvedGroups: 'wall/getCluesForSolvedGroups',
                    selectedTileCount: 'wall/selectedTilesCount',
                    wallSolved: 'wall/wallSolved',
                    selectionsAreSingleGroup: 'wall/selectionsAreSingleGroup'
                }),

            checkSelectedItemsCount() {
                return this.selectedTileCount === 4;
            },

        },
        created() {
            this.initWall();

        },
        watch: {
            // whenever question changes, this function will run
            checkSelectedItemsCount: function () {
                if(this.checkSelectedItemsCount && this.selectionsAreSingleGroup) {
                    this.groupFound();
                } else {
                    this.clearSelectedTiles();
                }
            },
            wallSolved: function () {
                if(this.wallSolved) {
                    this.completeWall();
                    this.$router.push({ name: 'connections' })
                }
            }
        }

    };


</script>