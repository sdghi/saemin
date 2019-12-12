const state = {
    toppings: [
        {
            // not finished
            name: 'Optimistic',
            refId: 0,
            // this is the title of what the topping is called
            title: 'sunny side up egg, lime, cilantro, and emanating rays of light.',
            // use this to remind you to the svg that will be output
            type: 'sunny side up egg, lime, cilantro, and emanating rays of light.',
            description: 'a ray of Sunshine Positive, bright, joyful'
        },
        {
            name: 'Troubled',
            refId: 1,
            title: 'bok choy, shiitake mushroom, and a dark cloud.',
            type: 'bok choy, shiitake mushroom, and a dark cloud.',
            description: 'melancholy, depressed, weighed down.'
        },
        {
            name: 'Disenchanted',
            refId: 2,
            title: 'Instant ramen cup or square package',
            type: 'Instant ramen cup or square package',
            description: 'unmotivated, apathetic, “meh”, lazy, lethargic, gudetama-like, tired, unmotivated, disenchanted, uninspired.'
        },
        {
            name: 'Anxious ',
            refId: 3,
            title: 'Char siu, deep kim chee, menma, a tangle of garnish',
            type: 'Char siu, deep kim chee, menma, a tangle of garnish',
            description: 'stressed, anxious, worried, jittery, overwhelmed, busy.'
        },
        {
            name: 'Easygoing',
            refId: 4,
            title: 'butter, corn, a tempura chillin’, and green onions.',
            type: 'butter, corn, a tempura chillin’, and green onions.',
            description: 'contentul, peaceful, serene, chill',
        },
        {
            name: 'Angry',
            refId: 5,
            title: 'hard boiled egg, hot chili peppers and Sriracha on the side',
            type: 'hard boiled egg, hot chili peppers and Sriracha on the side',
            description: 'irritable and angry'
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