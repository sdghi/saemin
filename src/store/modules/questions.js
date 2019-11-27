const state = {
    questions: [
        {
            content: 'Pick a spirit animal',
            // ingredient 0 will be noodles and broth together
            ingredientRef: 0,
            answers: [
                {
                    // This object references a single answer
                    content: 'Tiger',
                    value: 2
                },
                {
                    content: 'Owl',
                    value: 1,
                },
                {
                    content: 'Pony',
                    value: 0
                },
                {
                    content: 'Bird',
                    value: 4
                }
            ]
        }
    ]

};

const getters = {
    allQuestions: (state) => state.questions
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}