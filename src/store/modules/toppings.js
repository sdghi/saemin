const state = {
    toppings: [
        {
            // not finished
            name: 'optimistic',
            refId: 0,
            // this is the title of what the topping is called
            title: 'sunny side up egg, lime, cilantro, and emanating rays of light',
            description: '“Why does it feel like the universe is smiling down on me?”'
        },
        {
            name: 'troubled',
            refId: 1,
            title: 'wilted bok choy, feel-like-shiitake mushroom, and a dark cloud',
            description: '“I don’t think you can handle my darkness.”'
        },
        {
            name: 'disenchanted',
            refId: 2,
            title: 'fatty pork belly, an uninspired egg, and “meh”-noki mushrooms',
            description: '“Let’s not do anything today.”'
        },
        {
            name: 'anxious ',
            refId: 3,
            title: 'Char siu, deep kim chee, menma, a tangle of garnish',
            description: '"Why so stressed?"'
        },
        {
            name: 'easygoing',
            refId: 4,
            title: 'a piece of fishcake, a tempura chillin’, cool cucumber',
            description: '“Just cruisin’!”',
        },
        {
            name: 'angry',
            refId: 5,
            title: 'an angry Hard boiled egg with Hot chili peppers, Gochujang, Mizuna and nori',
            description: '“Cross me and I might bite your head off.”'
        }
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