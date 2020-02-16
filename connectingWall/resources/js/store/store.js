import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        groups: ['one','two','three','four'],
        clues: [
            {id:1, group:'one', clue:'clue one'},
            {id:2, group:'one', clue:'clue two'},
            {id:3, group:'two', clue:'clue one'},
            {id:4, group:'two', clue:'clue two'},
            {id:1, group:'one', clue:'clue one'},
            {id:2, group:'one', clue:'clue two'},
            {id:3, group:'two', clue:'clue one'},
            {id:4, group:'two', clue:'clue two'},
            {id:1, group:'one', clue:'clue one'},
            {id:2, group:'one', clue:'clue two'},
            {id:3, group:'two', clue:'clue one'},
            {id:4, group:'two', clue:'clue two'},
            {id:1, group:'one', clue:'clue one'},
            {id:2, group:'one', clue:'clue two'},
            {id:3, group:'two', clue:'clue one'},
            {id:4, group:'two', clue:'clue two'},
        ],
        selected: [],
        connections:[],
    },

    getters: {
        
    },

    actions: {

    },

    mutations: {

    }

});

