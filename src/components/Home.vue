<template>
	<div id="app-container">
		<Landing v-if="!quizCompleted" :quizStarted="quizStarted" />
		<Quiz v-if="!quizCompleted" :quizStarted="quizStarted" />
		<Results v-if="quizCompleted" />
	</div>
</template>

<script>
	import Landing from "./Landing.vue";
	import "scroll-behavior-polyfill";
	import { mapGetters } from "vuex";
	import Quiz from "./Quiz";
	import Results from "./Results";

	export default {
		name: "Home",
		computed: mapGetters(["quizCompleted", "quizStarted"]),
		updated() {
			// scroll jack until all question are answered
			if (this.quizStarted) {
				document.body.style.overflow = "hidden";
			}
			if (this.quizCompleted) {
				document.body.style.overflowY = "initial";
			}
		},
		components: {
			Quiz,
			Results,
			Landing
		}
	};
</script>

<style lang="scss" scoped>
	#app-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		min-height: 100vh;
	}
</style>
