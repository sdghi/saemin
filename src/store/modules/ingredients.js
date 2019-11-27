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
        console.log({
            'noodles and broth': state.brothAndNoodle,
            'toppings': state.toppings,
            'bowl': state.bowl
        });
    },
    addBroth(state, { payload, index }) {
        console.log('state index', index)
        if (typeof state.brothAndNoodle[index] === 'undefined') {
            state.brothAndNoodle.push(payload);
        } else {
            state.brothAndNoodle[index] = payload;
        }
        // state.brothAndNoodle.push(payload.value);
        console.log('broth and noodle', state.brothAndNoodle);
    },
    addToppings(state, payload) {
        state.toppings.push(payload);
        console.log('toppings', state.brothAndNoodle);
    },
    addBowl(state, payload) {
        state.bowl.push(payload);
        console.log('bowl', state.brothAndNoodle);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}