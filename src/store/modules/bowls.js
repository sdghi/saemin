const state = {
    bowls: [
        {
            // not finished
            name: 'Hipster',
            refId: 0,
            // this is the title of what the topping is called
            title: 'Raku japanese bowl with wooden chopsticks.',
            // use this to remind you to the svg that will be output
            type: 'Raku japanese bowl.',
            description: 'wooden.'
        },
        {
            name: 'Classy',
            refId: 1,
            title: 'Bowl with clean lines.',
            type: 'Bowl with clean lines.',
            description: 'minimalist and chic.'
        },
        {
            name: 'Local',
            refId: 2,
            title: 'Chinese style bowl with bamboo chopsticks.',
            type: 'Chinese style bowl with bamboo chopsticks.',
            description: 'simple'
        },
        {
            name: 'Eclectic',
            refId: 3,
            title: 'patterned bowl with jewel embedded bronze chopsticks',
            type: 'patterned bowl with jewel embedded bronze chopsticks',
            description: 'bohemian.'
        },
        {
            name: 'Cute',
            refId: 4,
            title: 'cutely patterned bowl with character chopsticks.',
            type: 'cutely patterned bowl with character chopsticks.',
            description: 'cute, adorable and whimsical.'
        },
        {
            name: 'Glamorous',
            refId: 5,
            title: 'crazy looking bowl that is brown.',
            type: 'crazy looking bowl that is brown.',
            description: 'weird looking.'
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