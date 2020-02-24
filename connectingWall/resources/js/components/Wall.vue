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
                    this.$store.dispatch('setLoadingStatus',false);
                }
            }
        },
        computed: {

            isLoading() {
                return this.$store.getters.getLoadingStatus;
            },
            getFullWidthClasses() {
                return 'col-xs-12 col-sm-12 col-md-12 col-lg-12';
            },

            getCluesForUnsolvedGroups() {
                return this.$store.getters.getCluesForUnsolvedGroups;
            },
            getCluesForSolvedGroups() {
                return this.$store.getters.getCluesForSolvedGroups;
            },

            checkSelectedItems() {
                return this.$store.getters.selectedTilesCount === 4;
            },
            wallSolved() {
                return this.$store.getters.wallSolved;
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
            },
            wallSolved: function () {
                if(this.wallSolved) {
                    this.$store.dispatch('completeWall');
                    this.$router.push({ name: 'connections' })
                }
            }
        }

    };


</script>