import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';

const state = {
    token: window.localStorage.getItem('imgur_token')
};

const getters = {
    isLoggedIn: (state) => !!state.token
};

const actions = {
    logout: ({ commit }) => {
        window.localStorage.removeItem('imgur_token');
        commit('setToken', null);
    },
    login: () => {
        api.login();
    },
    finalizeLogin({ commit }, hash) {
        var query = qs.parse(hash.replace('#',''));
        window.localStorage.setItem('imgur_token', query.access_token);
        commit('setToken', query.access_token);

        router.push('/');
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};


