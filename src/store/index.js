import Vuex from 'vuex';
import Vue from 'vue';
import questions from './modules/questions';
import descriptions from './modules/descriptions';
import ingredients from './modules/ingredients';

// Load Vuex
Vue.use(Vuex);

// Create Store
export default new Vuex.Store({
    modules: {
        questions,
        descriptions,
        ingredients
    }
})
