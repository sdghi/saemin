
const state = {
    quizStarted: false,
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
                    content: 'Dog',
                    value: 3
                },
                {
                    content: 'Monkey',
                    value: 5
                },
                {
                    content: 'Cat',
                    value: 4
                }
            ]
        },
        {
            content: 'I find ________ the most interesting',
            isAnswered: false,
            illustrationRef: 0,
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
                    content: "Kids’ perspectives",
                    value: 3
                },
                {
                    content: "Exploring unknown territory",
                    value: 4
                },
                {
                    content: "Connecting with my community",
                    value: 5
                },
                {
                    content: 'Organizing things',
                    value: 2
                }
            ]
        },
        {
            content: 'You’re Bored. Pick a smartphone activity / app',
            isAnswered: false,
            illustrationRef: 0,
            ingredientRef: 0,
            answers: [
                {
                    content: 'Instagram',
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
                    content: 'Reminders',
                    value: 2
                },
                {
                    content: 'Camera',
                    value: 4
                },
                {
                    content: 'Pinterest',
                    value: 5
                }
            ]
        },

    ]

};

const getters = {
    allQuestions: (state) => state.questions,
    quizCompleted: (state) => state.quizCompleted,
    quizStarted: (state) => state.quizStarted
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
    },
    setQuizStarted(state, { value }) {
        state.quizStarted = value;
    },
    resetAllAnsweredStatus(state) {
        state.questions.map(question => {
            question.isAnswered = false;
        })
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}