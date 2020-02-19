import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        groups: [
                {id:0,connection:'Operating Systems'},
                {id:1,connection:'___ Artist'},
                {id:2,connection:'Animal Homophones'},
                {id:3,connection:'___ man'}
        ],
        clues: [
            {id:1, groupId:0, clue:'lion'},
            {id:2, groupId:0, clue:'tiger'},
            {id:3, groupId:0, clue:'eclair'},
            {id:4, groupId:0, clue:'vista'},
            {id:5, groupId:1, clue:'street'},
            {id:6, groupId:1, clue:'con'},
            {id:7, groupId:1, clue:'the'},
            {id:8, groupId:1, clue:'trapeze'},
            {id:9, groupId:2, clue:'bare'},
            {id:10, groupId:2, clue:'hair'},
            {id:11, groupId:2, clue:'hoarse'},
            {id:12, groupId:2, clue:'wail'},
            {id:13, groupId:3, clue:'super'},
            {id:14, groupId:3, clue:'bat'},
            {id:15, groupId:3, clue:'early'},
            {id:16, groupId:3, clue:'leather'},
        ],
        activeTiles: [],
        groupsFoundIds:[],
    },

    getters: {

        getCluesForUnsolvedGroups: state => {
            return  state.clues.filter(clue => state.groupsFoundIds.lastIndexOf(clue.groupId) === -1).sort(function(){return 0.5 - Math.random()});
        },

        getCluesForSolvedGroups: state => state.clues.filter(clue => state.groupsFoundIds.lastIndexOf(clue.groupId) > -1),

        activeTiles: state => state.activeTiles,

        selectedTilesCount: state => state.activeTiles.length,

        isActiveTile: state => id => state.activeTiles.findIndex(tile => tile.tileId === id) > -1,

        showModal: state => state.activeTiles.length === 4,

        showTilesForGroup: state => groupId => state.groupsFoundIds.lastIndexOf(groupId) === -1,

        selectionsAreSingleGroup: state => {
            if(state.activeTiles.length < 4) return false;
            const groupId = state.activeTiles[0].groupId;
            //const filteredSelection = state.activeTiles.filter(tile => tile.groupId === groupId);

            return state.activeTiles.filter(tile => tile.groupId === groupId).length === 4;
        },

        wallSolved: state => state.groupsFoundIds.length >= 3,



    },

    actions: {
        selectTile({commit,state}, payload) {

            const existingEntry = state.activeTiles.filter((tile) => {
                return tile.tileId === payload.tileId;
            });

            if(existingEntry.length === 0) {
                commit('ADD_SELECTED_TILE_ID',payload);
            }

        },

        deSelectTile({state, commit}, payload) {
            const indexToRemove = state.activeTiles.findIndex(tile => tile.tileId === payload.tileId);

            if(indexToRemove > -1) {
                commit('REMOVE_SELECTED_TILE_ID',indexToRemove);
            }

        },

        groupFound({state,commit}) {
            const groupId = state.activeTiles[0].groupId;
            commit('ADD_FOUND_GROUP',groupId);

            commit('CLEAR_CURRENT_SELECTION');
        },
        clearSelectedTiles({commit}) {
            commit('CLEAR_CURRENT_SELECTION');
        },
        completeWall({commit}){
            commit('COMPLETE_WALL');
        }
    },

    mutations: {

        ADD_SELECTED_TILE_ID(state,payload){
            state.activeTiles.push(payload);
        },

        REMOVE_SELECTED_TILE_ID(state,payload){
           state.activeTiles.splice(payload,1);
        },

        ADD_FOUND_GROUP(state,payload) {
            state.groupsFoundIds.push(payload);
        },

        CLEAR_CURRENT_SELECTION(state) {
            state.activeTiles = [];
        },
        COMPLETE_WALL(state) {
            if(state.groupsFoundIds.length < 4) {
                state.groupsFoundIds = state.groups.map(group => group.id);

            }
        }
    }

});

