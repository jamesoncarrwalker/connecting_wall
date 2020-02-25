<template>
    <li
        :class="['align-middle','text-center','col-xs-4 col-sm-3 col-md-3 col-lg-3', 'wallTile',
        solved ? 'group_' + groupId : '', {active:tileActiveStatus}
         ]"
        @click="toggleActiveStatus"
    >
        <div class="tileContent" v-text="title"></div>

    </li>

</template>

<script>
    import {mapGetters,mapActions} from 'vuex';

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
            solved: {
                type: Boolean,
                default: false
            }

        },

        methods: {
            toggleActiveStatus() {
                if(this.solved) return;
                let payload = {tileId:this.id, groupId: this.groupId};
                if(this.tileActiveStatus) {
                    this.deSelectTile(payload);
                } else {
                    this.selectTile(payload);
                }
            },
                ...mapActions({
                    deSelectTile: 'wall/deSelectTile',
                    selectTile: 'wall/selectTile'
                }),
        },

        computed: {
                ...mapGetters({
                    isActiveTile: 'wall/isActiveTile',

                }),
                tileActiveStatus() {
                    return this.isActiveTile(this.id);
                }
        },
        data() {
            return {
                solvedClass:'group_' + this.groupId
            }
        }

    };

</script>