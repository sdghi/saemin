
const state = {
    quizStarted: false,
    quizCompleted: false,
    questions: [
        // PERSONALITY QUESTIONS
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
        {
            content: 'Pick an experience',
            isAnswered: false,
            illustrationRef: 0,
            ingredientRef: 0,
            answers: [
                {
                    content: 'Concert',
                    value: 0
                },
                {
                    content: 'Game Night',
                    value: 1
                },
                {
                    content: 'Staycation',
                    value: 3
                },
                {
                    content: 'Burning Man',
                    value: 4
                },
                {
                    content: 'Try a new restaurant',
                    value: 5
                },
                {
                    content: 'A workshop, class or conference',
                    value: 2
                }
            ]
        },
        {
            content: 'In school group projects, I was often in the role of:',
            isAnswered: false,
            illustrationRef: 0,
            ingredientRef: 0,
            answers: [
                {
                    content: "Devil’s Advocate",
                    value: 1
                },
                {
                    content: 'Mastermind',
                    value: 2
                },
                {
                    content: "Illustrator",
                    value: 4
                },
                {
                    content: 'Presenter',
                    value: 0
                },
                {
                    content: 'Facilitator',
                    value: 5
                },
                {
                    content: 'Supporter',
                    value: 3
                }
            ]
        },
        {
            content: 'Of the following, which is most important to you?',
            isAnswered: false,
            illustrationRef: 0,
            ingredientRef: 0,
            answers: [
                {
                    content: 'Harmony',
                    value: 2
                },
                {
                    content: 'Efficiency',
                    value: 1
                },
                {
                    content: 'Current Events',
                    value: 0
                },
                {
                    content: 'Expression',
                    value: 4
                },
                {
                    content: 'Open Mindedness',
                    value: 5
                },
                {
                    content: 'Peace',
                    value: 3
                }
            ]
        },
        {
            content: 'Which best represents you?',
            isAnswered: false,
            illustrationRef: 0,
            ingredientRef: 0,
            answers: [
                {
                    content: 'The roof',
                    value: 3
                },
                {
                    content: 'The door',
                    value: 5
                },
                {
                    content: 'The window',
                    value: 4
                },
                {
                    content: 'The space',
                    value: 5
                },
                {
                    content: 'The living room',
                    value: 0
                },
                {
                    content: 'The pillars',
                    value: 2
                }
            ]
        },
        {
            content: 'You get a bonus day off. What do you do with it?',
            isAnswered: false,
            illustrationRef: 0,
            ingredientRef: 0,
            answers: [
                {
                    content: 'Catch up on some work',
                    value: 2
                },
                {
                    content: 'Indulge in a hobby',
                    value: 5
                },
                {
                    content: 'Dive into a book',
                    value: 1
                },
                {
                    content: 'Make plans to go out',
                    value: 0
                },
                {
                    content: 'Spend time with the fam',
                    value: 3
                },
                {
                    content: 'Do something spontaneous',
                    value: 4
                }
            ]
        },
        {
            content: 'Pick the character from The Office you relate to most',
            isAnswered: false,
            illustrationRef: 0,
            ingredientRef: 0,
            answers: [
                {
                    content: 'Michael Scott',
                    value: 5
                },
                {
                    content: 'Dwight Schrute',
                    value: 1
                },
                {
                    content: 'Phyllis Vance',
                    value: 3
                },
                {
                    content: 'Kelley Kapoor',
                    value: 0
                },
                {
                    content: 'Ryan Howard',
                    value: 4
                },
                {
                    content: 'Deangelo Jeremitrius Vickers',
                    value: 2
                }
            ]
        },
        {
            content: 'My Kryptonite:',
            isAnswered: false,
            illustrationRef: 0,
            ingredientRef: 0,
            answers: [
                {
                    content: 'Emotions',
                    value: 1
                },
                {
                    content: 'Rigid Rules & Institutions',
                    value: 4
                },
                {
                    content: 'Too Much Pressure',
                    value: 3
                },
                {
                    content: 'Unwanted Change',
                    value: 0
                },
                {
                    content: 'Micromanagement',
                    value: 5
                },
                {
                    content: 'Analysis Paralysis',
                    value: 2
                }
            ]
        },
        {
            content: 'Zombie apocalypse! Pick a thing',
            isAnswered: false,
            illustrationRef: 0,
            ingredientRef: 0,
            answers: [
                {
                    content: 'Armor',
                    value: 3
                },
                {
                    content: 'Crossbow',
                    value: 2
                },
                {
                    content: 'Cool outfit',
                    value: 0
                },
                {
                    content: 'Laboratory',
                    value: 1
                },
                {
                    content: 'Abandoned Mall',
                    value: 4
                },
                {
                    content: 'Car',
                    value: 5
                }
            ]
        },
        // MOOD QUESTIONS

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