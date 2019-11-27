const state = {
    // Answer values will push up values to the arr and then will find the 
    // mode value to find the ingredient that the user is most like
    brothAndNoodle: [],
    toppings: [],
    bowl: []
};

const getters = {
    brothAndNoodle: (state) => state.brothAndNoodle,
    toppings: (state) => state.toppings,
    bowl: (state) => state.bowl
};

const actions = {};

const mutations = {
    clearIngredients(state) {
        state.brothAndNoodle = [];
        state.toppings = [];
        state.bowl = [];
        console.log(state);
    },
    addBroth(state, payload) {
        state.brothAndNoodle.push(payload);
        console.log(state.brothAndNoodle);
    },
    addToppings(state, payload) {
        state.toppings.push(payload);
    },
    addBowl(state, payload) {
        state.bowl.push(payload);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}