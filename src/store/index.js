import Vuex from 'vuex';
import Vue from 'vue';
import questions from './modules/questions';
import ingredients from './modules/ingredients';
import noodlesAndBroth from './modules/noodlesAndBroth';

// Load Vuex
Vue.use(Vuex);

// Create Store
export default new Vuex.Store({
    modules: {
        questions,
        ingredients,
        noodlesAndBroth,
    }
})
