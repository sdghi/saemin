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
            title: 'bok choy, shiitake mushroom, and a dark cloud',
            description: '“I don’t think you can handle my darkness.”'
        },
        {
            name: 'disenchanted',
            refId: 2,
            title: 'Instant ramen cup or square package',
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
            title: 'butter, corn, a tempura chillin’, and green onions',
            description: '“Just cruisin’!”',
        },
        {
            name: 'angry',
            refId: 5,
            title: 'hard boiled egg, hot chili peppers and Sriracha on the side',
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