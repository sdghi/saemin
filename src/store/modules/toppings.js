const state = {
    toppings: [
        {
            // not finished
            name: 'Optimistic',
            refId: 0,
            // this is the title of what the noodle is called
            title: 'SHOYU seafood truffle oil base',
            // use this to remind you to the svg that will be output
            type: 'Medium Squid Ink Noodles',
            description: 'Usually popular with people, you are great at making friends. Social gatherings are your scene, and you feel at home in the spotlight. You love spreading positive energy and keeping people engaged. You know what’s in and what’s up — we can see that from your IG story.'
        },

    ]
};

const getters = {
    allToppings: (state) => state.toppings,
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}