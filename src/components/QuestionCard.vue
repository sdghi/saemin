<template>
	<section
		:class="{
			even: index % 2 !== 0 && index % 3 !== 0,
			odd: index % 2 === 0 && index % 3 !== 0,
			third: index % 3 === 0,
			first: index === 0
		}"
		ref="questionSection"
	>
		<TopRidge
			:fillClass="{
				even: index % 2 !== 0 && index % 3 !== 0,
				odd: index % 2 === 0 && index % 3 !== 0,
				third: index % 3 === 0
			}"
		/>

		<div class="question-card" ref="quizQuestion">
			<div class="question-container" ref="questionContainer">
				<QuestionPattern />
				<QuestionPatternMobile />
				<h3>{{ question.content }}</h3>
				<div class="answers-container">
					<!-- the answer == 1 will be data.value and the value in the input will be pulled data.answerTitle -->
					<button
						v-for="answer in question.answers"
						:key="answer.id"
						@click="setAnswer"
						:data-currentAnswer="answer.content"
						class="answer"
						:class="{ selected: currentAnswer == answer.content }"
						:value="answer.value"
					>
						{{ answer.content }}
					</button>
				</div>
				<div class="bottom-row">
					<BackBtn
						content="back"
						btnStyle="back"
						:btnEvent="goBack"
						v-if="index !== 0"
					/>
					<h4 class="question-status">
						{{ index + 1 }} of {{ allQuestions.length }}
					</h4>
				</div>
			</div>

			<!-- this is the illustration -->
			<div id="bottom-noodles">
				<IllustrationOne v-if="index % 2 !== 0 && index % 3 !== 0" />
				<IllustrationTwo v-if="index % 2 === 0 && index % 3 !== 0" />
				<IllustrationThree v-if="index % 3 === 0" />
			</div>
		</div>
		<audio ref="slurpAudio" src="slurp.mp3"></audio>
	</section>
</template>

<script>
	import "scroll-behavior-polyfill";
	import IllustrationOne from "./Transitions/IllustrationOne";
	import IllustrationTwo from "./Transitions/IllustrationTwo";
	import IllustrationThree from "./Transitions/IllustrationThree";
	import QuestionPattern from "./Illustrations/QuestionPattern";
	import QuestionPatternMobile from "./Illustrations/QuestionPatternMobile";
	import BackBtn from "./BackBtn";
	import TopRidge from "./Illustrations/TopRidge";
	import { mapGetters } from "vuex";

	export default {
		name: "QuestionCard",
		computed: mapGetters(["scrollHeight"]),
		props: ["question", "allQuestions", "quizCompleted", "setScrollHeight"],
		components: {
			IllustrationOne,
			IllustrationTwo,
			IllustrationThree,
			TopRidge,
			BackBtn,
			QuestionPattern,
			QuestionPatternMobile
		},
		data() {
			return {
				currentAnswer: null,
				isSelected: false,
				index: this.allQuestions.indexOf(this.question),
				nextScrollHeight: 0,
				currentQuestionHeight: 0,
				currentColor: ""
			};
		},
		updated() {
			this.checkIfCompleted();
			this.playAudio();
		},
		methods: {
			playAudio() {
				this.$refs.slurpAudio.play();
			},
			goBack() {
				window.scrollY - this.scrollHeight > 0 &&
					window.scrollTo({
						top: window.pageYOffset - this.scrollHeight,
						behavior: "smooth"
					});
			},
			setAnswer(e) {
				// sets current answer
				this.isSelected = true;
				this.currentAnswer = e.target.getAttribute("data-currentAnswer");

				// adds the ingredient if it doesn't exists || updates if index exists
				this.$store.commit("addIngredient", {
					payload: e.target.value,
					index: this.index,
					ingredientRef: this.question.ingredientRef
				});

				// sets the isAnswered to true if answer is selected
				this.$store.commit("setQuestionsToAnswered", {
					selected: this.question.content,
					value: true
				});

				// set the global scroll height for the back button
				this.$store.commit("setScrollHeight", {
					value: this.$refs.quizQuestion.clientHeight
				});

				// Scroll window from current window position to the start of the next question
				if (this.index === 0) {
					window.scrollTo({
						top: window.pageYOffset + this.$refs.quizQuestion.clientHeight,
						behavior: "smooth"
					});
				} else if (this.index !== this.allQuestions.length - 1) {
					window.scrollTo({
						top: window.pageYOffset + this.$refs.quizQuestion.clientHeight,
						behavior: "smooth"
					});
				} else {
					window.scrollTo({
						top: 0
					});
				}
			},
			checkIfCompleted() {
				function checkAnswerStatus(element) {
					return element.isAnswered === true;
				}

				for (let i = 0; i < this.allQuestions.length; i++) {
					if (this.allQuestions.every(checkAnswerStatus)) {
						// run the quiz completed mutation
						this.$store.commit("setQuizStatus", {
							result: true
						});
					}
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	.bottom-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 30px;

		.question-status {
			font-size: 0.75rem;
			color: #c1113b;
			font-weight: 600;
		}
	}

	.first {
		.bottom-row {
			justify-content: flex-end;
		}
	}

	section {
		height: fit-content;
		width: 100%;
		background: $maroon;
		position: relative;

		&:after {
			content: "";
			top: -20%;
			position: absolute;
			height: 20%;
			width: 100%;
			background: $maroon;
		}

		&.third {
			background: $maroon;
			&::after {
				background: $maroon;
			}
		}

		&.even {
			background: $gold;

			&::after {
				background: $gold;
			}
		}

		&.odd {
			background: $teal;

			&::after {
				background: $teal;
			}
		}
	}

	svg.even {
		fill: $gold;
	}

	svg.odd {
		fill: $teal;
	}

	svg.third {
		fill: $maroon;
	}

	.question-container {
		border-radius: 15px;
	}

	.answer {
		border-radius: 5px;
	}

	.question-card {
		position: relative;
		z-index: 10;
		margin: 0 auto 0 auto;

		h3 {
			font-size: 1.3rem;
			font-family: $type-base;
		}
	}

	// May break into another component later
	.question-container {
		background: $pink;
		padding: 20px 15px;

		h3 {
			text-align: center;
			color: $textGold;
			margin: 0;
			padding: 30px 0 15px 0;
			font-weight: 700;
		}
	}

	.answers-container {
		user-select: none;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 10px;

		.answer {
			width: 100%;
			height: 60px;
			background: $white;
			border: none;
			cursor: pointer;
			text-align: center;
			font-size: 0.9rem;
			font-weight: 600;
			color: $maroon;
			transition: all 0.2s ease-out;
			padding: 10px;
			line-height: 1.125rem;
			letter-spacing: 0.02em;

			&.selected,
			&:hover {
				background: $textGold;
				color: $maroon;
			}
		}
	}

	#bottom-noodles {
		display: grid;
		place-items: center;
		svg {
			height: 100vh;
		}
	}

	@media (min-width: $breakpoint-small) {
		section {
			&::after {
				height: 30%;
				top: -30%;
			}
		}

		.bottom-row {
			.question-status {
				font-size: 1em;
			}
		}

		.question-container {
			padding: 50px;

			h3 {
				padding: 30px;
			}
		}
		.question-card {
			width: 80%;

			h3 {
				font-size: 2rem;
			}
		}

		.answers-container {
			grid-template-columns: repeat(3, 1fr);
			max-height: fit-content;
			grid-gap: 20px;

			.answer {
				height: 150px;
				line-height: 1.875rem;
				font-size: 1.5rem;
			}
		}
	}

	@media (min-width: $breakpoint-medium) {
		.question-card {
			width: 60%;
		}
	}
</style>
