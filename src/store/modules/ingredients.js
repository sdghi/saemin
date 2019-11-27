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

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}