import Vue from 'vue';
import Vuex from 'vuex';
import connections from './modules/connections';
import wall from './modules/wall';
import shared from './modules/shared';

Vue.use(Vuex);

export const store = new Vuex.Store({

    modules: {
        shared,
        connections,
        wall
    }

});

