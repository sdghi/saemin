const state = {
    noodlesAndBroth: [
        {
            name: 'a socialite',
            refId: 0,
            // this is the title of what the noodle is called
            title: 'SHOYU seafood truffle oil base',
            // use this to remind you to the svg that will be output
            type: 'Medium Squid Ink Noodles',
            description: 'Usually popular with people, you are great at making friends. Social gatherings are your scene, and you feel at home in the spotlight. You love spreading positive energy and keeping people engaged. You know what’s in and what’s up — we can see that from your IG story.'
        },
        {
            name: 'intellectual',
            refId: 1,
            title: 'SHIO pork base',
            type: 'Thin straight noodles',
            description: 'You are an analyst. A practical and rational problem solver, you love a good puzzle or challenge. You value efficiency and practicality, and are very reliable.Use your wit to strategize a plan for the new year.'
        },
        {
            name: 'a leader',
            refId: 2,
            title: 'TANTAN smoked beef and black pepper base',
            type: 'Regular wavy noodles',
            description: 'You are a visionary, a planner, and you see the big picture. You naturally gravitate towards leadership roles and influence people with your charisma and energy/ This new year, you are the boss of your future. Remember, it’s ok to ask for help from your community—they would love to help you. Time to rally up the people around you and work towards your goals.'
        },
        {
            name: 'a Mama Bear',
            refId: 3,
            title: 'PAITAN or KOTTERI chicken base',
            type: 'Fat udon noodles',
            description: 'You are a protector and mediator, the shoulder to cry on. You are the one people often run to for advice, courage, and strength. The welfare of others is of utmost concern and you are always found caring for others.'
        },
        {
            name: 'an artist',
            refId: 4,
            title: 'BLACK GARLIC TONKOTSU pork base',
            type: 'Green marungay noodles',
            description: 'You go where the wind takes you, and your feet quicken to new experiences. You love to reinvent, experiment, and express yourself. This New Year, the world is your oyster. Tap into your imagination and show the world your next passion project.'
        },
        {
            name: 'creative',
            refId: 5,
            title: 'MISO & SESAME base',
            type: 'Thick Hand Pulled Tsukemen Noodles',
            description: 'Ever-inquisitive, your curiosity is never satiated. With your open mind, you love soaking everything in letting it fuel you with inspiration'
        },
        {
            name: 'a protector',
            refId: 6,
            title: 'CURRY base',
            type: 'Curly noodles',
            description: 'Head in the clouds, always dreaming, idealist, starry-eyed, passionate, emotional. Hearty, indulgent Comfort food'
        }
    ]
};

const getters = {
    allNoodlesAndBroth: (state) => state.noodlesAndBroth,
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}