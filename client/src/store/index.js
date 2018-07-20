
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({

    state: {
        isAuthenticated: true
    },

    getters: {
        getIsAuthenticated: state => {
            return  state.isAuthenticated;
        }
    },
    mutations: {
        setIsAuthenticated(state, isAuthenticated) {
            state.isAuthenticated = isAuthenticated;
        },
    }
});

export default store