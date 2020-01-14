const state = {
    toppings: [
        {
            // not finished
            name: 'Optimistic',
            starter: 'an',
            refId: 0,
            // this is the title of what the topping is called
            title: 'Sunny side up egg, lime, cilantro, and emanating rays of light.',
            description: '“Why does it feel like the universe is smiling down on me?”'
        },
        {
            name: 'Troubled',
            starter: 'a',
            refId: 1,
            title: 'Wilted bok choy, feel-like-shiitake mushroom, and a dark cloud.',
            description: '“I don’t think you can handle my darkness.”'
        },
        {
            name: 'Disenchanted',
            starter: 'a',
            refId: 2,
            title: 'Fatty pork belly, an uninspired egg, and “meh”-noki mushrooms.',
            description: '“Let’s not do anything today.”'
        },
        {
            name: 'Anxious ',
            starter: 'an',
            refId: 3,
            title: 'Char siu, deep kim chee, menma, a tangle of garnish.',
            description: '"Why so stressed?"'
        },
        {
            name: 'Easygoing',
            starter: 'an',
            refId: 4,
            title: 'A piece of fishcake, a tempura chillin’, cool cucumber.',
            description: '“Just cruisin’!”',
        },
        {
            name: 'Angry',
            starter: 'an',
            refId: 5,
            title: 'Angry Hard boiled egg with Hot chili peppers, Gochujang, Mizuna and nori.',
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