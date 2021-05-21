import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth
    }
});


//secret id: 2d2cb2a00036b7984e2fc21cdfea64f846126dce