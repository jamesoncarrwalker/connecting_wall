/**
 * Created by jamesskywalker on 25/02/2020.
 */
export default {
    namespaced:true,
    state:{

        groups: [
            {id:0,connection:'Operating Systems'},
            {id:1,connection:'___ Artist'},
            {id:2,connection:'Animal Homophones'},
            {id:3,connection:'___ man'}
        ],
        connections: [

        ]

    },

    getters: {


        getUserConnectionForGroup: state => id => {
            const guess = state.connections.filter(conn => conn.groupId === id );
            return guess.length > 0 ? guess[0].value : '';
        },

        getCorrectConnectionForGroup: state => id => {
            const guess = state.groups.filter(conn => conn.id === id );
            return guess.length > 0 ? guess[0].connection: '';
        },

        getGroups: state => state.groups

    },

    actions: {

        saveConnection({commit},payload) {
            commit('SAVE_CONNECTION',payload);
        }
    },

    mutations: {

        SAVE_CONNECTION(state,payload) {
            state.connections.push(payload);
        }
    }
}