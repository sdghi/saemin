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
    bowl: (state) => state.bowl,
    allIngredients: (state) => {
        return {
            brothAndNoodle: state.brothAndNoodle,
            toppings: state.toppings,
            bowl: state.bowl
        }
    }
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
    addIngredient(state, {
        payload,
        ingredientRef,
        index
    }) {
        if (ingredientRef === 0) {
            // add to broth  
            if (typeof state.brothAndNoodle[index] === 'undefined') {
                state.brothAndNoodle.push(payload);
            } else {
                state.brothAndNoodle[index] = payload;
            }
        } else if (ingredientRef === 1) {
            // add to toppings
            if (typeof state.toppings[index] === 'undefined') {
                state.toppings.push(payload);
            } else {
                state.toppings[index] = payload;
            }
        } else if (ingredientRef === 2) {
            // add to bowl
            if (typeof state.bowl[index] === 'undefined') {
                state.bowl.push(payload);
            } else {
                state.bowl[index] = payload;
            }
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}