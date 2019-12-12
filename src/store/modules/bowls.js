const state = {
    bowls: [
        {
            // not finished
            name: 'Optimistic',
            refId: 0,
            // this is the title of what the topping is called
            title: 'sunny side up egg, lime, cilantro, and emanating rays of light.',
            // use this to remind you to the svg that will be output
            type: 'sunny side up egg, lime, cilantro, and emanating rays of light.',
            description: 'a ray of Sunshine Positive, bright, joyful'
        }
    ]
};

const getters = {
    allBowlss: (state) => state.bowls,
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}