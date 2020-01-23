const state = {
	noodlesAndBroth: [
		{
			name: "Socialite",
			refId: 0,
			// this is the title of what the noodle is called
			title: "Shoyu Ramen with a splash of Yuzu",
			// use this to remind you to the svg that will be output
			type: "all-around likeable and refreshing.",
			description:
				"You have a full bowl of friends and make a splash at social gatherings. You know what’s in and what’s up. Continue to spread your warmth to all and it will come back to you tenfold."
		},
		{
			name: "Intellectual",
			refId: 1,
			title: "Shio Pork Ramen",
			type: "clear, straightforward, and kinda salty.",
			description:
				"You are analytical,  practical, and strategic. Your nerdy noodles will come in handy as you tackle your next big challenge. May your efforts bring prosperity and abundance!"
		},
		{
			name: "Leader",
			refId: 2,
			title: "Tantan Miso Sesame Ramen",
			type: "you put on the heat with your passion and determination.",
			description:
				"You tend to move people with your charisma, vision, and energy. This is the year to follow your hunger and find fulfillment."
		},
		{
			name: "Mama Bear",
			refId: 3,
			title: "Paitan Ramen",
			type: "warm and comforting like a blanket or hug.",
			description:
				"You are a compassionate protector, happiest when you are able to care for others. Remember to find ways to recharge and refuel, like having delicious ramen—you need care too."
		},
		{
			name: "Artist",
			refId: 4,
			title: "Seafood & Truffle Oil Ramen",
			type: "you have the appetite for adventure.",
			description:
				"You love to reinvent, experiment, and express yourself, and your feet quicken to new experiences. Explore a new discipline to pull inspiration for your next creation."
		},
		{
			name: "Free Spirit",
			refId: 5,
			title: "Smoked Beef & Black Garlic Tonkotsu Tsukemen",
			type: "an old soul, curious and deep.",
			description:
				"Your curiosity is never satiated. With your open mind, you love soaking everything in and letting it fuel your creativity. Go somewhere new and see what transpires."
		},
		{
			name: "Protector",
			refId: 6,
			title: "CURRY base",
			type: "Curly noodles",
			description:
				"Head in the clouds, always dreaming, idealist, starry-eyed, passionate, emotional. Hearty, indulgent Comfort food"
		}
	]
};

const getters = {
	allNoodlesAndBroth: state => state.noodlesAndBroth
};

const actions = {};

const mutations = {};

export default {
	state,
	getters,
	actions,
	mutations
};
