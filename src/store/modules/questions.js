
const state = {
    quizCompleted: false,
    questions: [
        {
            content: 'Pick a spirit animal',
            isAnswered: false,
            // this will reference the illustration on the bottom of the question
            illustrationRef: 0,
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
                },
                {
                    content: 'Otter',
                    value: 6
                },
                {
                    content: 'Bear',
                    value: 6
                },
                {
                    content: 'Wolf',
                    value: 2
                },
                {
                    content: 'Monkey',
                    value: 5
                },
                {
                    content: 'Dog',
                    value: 0
                },
                {
                    content: 'Cat',
                    value: 4
                },
                {
                    content: 'Elephant',
                    value: 6
                },
                {
                    content: 'Octopus',
                    value: 4
                }
            ]
        },
        {
            content: 'I find ___ the most interesting',
            isAnswered: false,
            illustrationRef: 1,
            ingredientRef: 0,
            answers: [
                {
                    content: "People's stories",
                    value: 0
                },
                {
                    content: 'Complex puzzles',
                    value: 1
                },
                {
                    content: "Kid's perspective",
                    value: 3
                },
                {
                    content: "Exploring unknown territory",
                    value: 4
                },
                {
                    content: "Connecting with my community",
                    value: 5
                }
            ]
        },
        {
            content: "You’re Bored. Pick a smartphone activity / app:",
            isAnswered: false,
            illustrationRef: 2,
            ingredientRef: 0,
            answers: [
                {
                    content: 'Instagram',
                    value: 0
                },
                {
                    content: 'Venmo',
                    value: 0
                },
                {
                    content: 'Facebook',
                    value: 3
                },
                {
                    content: 'Twitter',
                    value: 1
                },
                {
                    content: 'Medium',
                    value: 1
                },
                {
                    content: 'Reminders',
                    value: 2
                },
                {
                    content: 'Camera',
                    value: 4
                }
            ]
        }
    ]

};

const getters = {
    allQuestions: (state) => state.questions,
    quizCompleted: (state) => state.quizCompleted
};

const actions = {};

const mutations = {
    setQuestionsToAnswered(state, { selected, value }) {
        state.questions.map((question) => {
            if (question.content == selected) {
                question.isAnswered = value;
            }
        })
    },
    setQuizStatus(state, { result }) {
        state.quizCompleted = result;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}