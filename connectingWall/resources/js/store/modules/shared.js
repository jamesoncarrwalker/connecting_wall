export default {
    namespaced:true,
    state: {
        isLoading: true,
    },

    getters: {
        getLoadingStatus: state => state.isLoading,

        getFullWidthClasses: () => 'col-xs-12 col-sm-12 col-md-12 col-lg-12'
    },

    actions: {
        setLoadingStatus({commit},payload) {
            commit('SET_LOADING_STATUS',payload);
        },
    },

    mutations: {
        SET_LOADING_STATUS(state,payload) {
            state.isLoading = payload;
        },
    }
}