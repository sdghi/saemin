const state = {
    noodle: [
        {
            id: 0,
            desc: "This is the noodle one description",
        },
        {
            id: 1,
            desc: "This is the noodle two description",
        },
        {
            id: 2,
            desc: "This is the noodle three description",
        },
    ],
    broth: [
        {
            id: 0,
            desc: "This is the broth one description",
        },
        {
            id: 1,
            desc: "This is the broth two description",
        },
        {
            id: 2,
            desc: "This is the broth three description",
        },
    ],
    bowl: [
        {
            id: 0,
            desc: "This is the bowl one description",
        },
        {
            id: 1,
            desc: "This is the bowl two description",
        },
        {
            id: 2,
            desc: "This is the bowl three description",
        },
    ],
    topping: [
        {
            id: 0,
            desc: "This is the topping one description",
        },
        {
            id: 1,
            desc: "This is the topping two description",
        },
        {
            id: 2,
            desc: "This is the topping three description",
        },
    ],

};

const getters = {
    allNoodles: (state) => state.noodle,
    allBroths: (state) => state.broth,
    allBowls: (state) => state.bowl,
    allToppings: (state) => state.topping
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}