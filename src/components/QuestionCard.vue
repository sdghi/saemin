<template>
  <section
    :class="{
      even: index % 2 !== 0 && index % 3 !== 0,
      odd: index % 2 === 0 && index % 3 !== 0,
      third: index % 3 === 0
    }"
    ref="questionSection"
  >
    <div class="question-card" ref="quizQuestion">
      <div class="question-container" ref="questionContainer">
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
        <button @click="goBack" v-if="index !== 0" class="back-btn">
          go back
        </button>
      </div>

      <!-- this is the illustration -->
      <div id="bottom-noodles">
        <IllustrationOne v-if="index % 2 !== 0 && index % 3 !== 0" />
        <IllustrationTwo v-if="index % 2 === 0 && index % 3 !== 0" />
        <IllustrationThree v-if="index % 3 === 0" />
      </div>
    </div>
  </section>
</template>

<script>
import "scroll-behavior-polyfill";
import IllustrationOne from "./Transitions/IllustrationOne";
import IllustrationTwo from "./Transitions/IllustrationTwo";
import IllustrationThree from "./Transitions/IllustrationThree";
import { mapGetters } from "vuex";

export default {
  name: "QuestionCard",
  computed: mapGetters(["scrollHeight"]),
  props: ["question", "allQuestions", "quizCompleted", "setScrollHeight"],
  components: {
    IllustrationOne,
    IllustrationTwo,
    IllustrationThree
  },
  data() {
    return {
      currentAnswer: null,
      isSelected: false,
      index: this.allQuestions.indexOf(this.question),
      nextScrollHeight: 0,
      currentQuestionHeight: 0
    };
  },
  updated() {
    this.checkIfCompleted();
  },
  methods: {
    goBack() {
      // check to see if it's the first question before going back
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

      const centerHeight =
        (window.innerHeight - this.$refs.questionContainer.clientHeight) / 2;

      // Scroll window from current window position to the start of the next question
      // If it's the last question wait for the results to load
      if (this.index === this.allQuestions.length - 1) {
        setTimeout(() => {
          window.scrollTo({
            top: window.pageYOffset + this.$refs.quizQuestion.clientHeight,
            behavior: "smooth"
          });
        }, 300);
      } else if (this.index === 0) {
        window.scrollTo({
          top:
            window.pageYOffset +
            this.$refs.quizQuestion.clientHeight -
            centerHeight,
          behavior: "smooth"
        });
      } else {
        window.scrollTo({
          top: window.pageYOffset + this.$refs.quizQuestion.clientHeight,
          behavior: "smooth"
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
section {
  height: fit-content;
  width: 100%;
  background: $maroon;
  position: relative;
  /* overflow: hidden; */

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

@media (min-width: $breakpoint-small) {
  section {
    &::after {
      height: 30%;
      top: -30%;
    }
  }
}

.question-card {
  position: relative;
  z-index: 10;
  margin: 0 auto 0 auto;
  color: $black;

  h3 {
    font-size: 1.3rem;
  }
}

// May break into another component later
.question-container {
  background: $card-color;
  padding: 50px;
  position: relative;

  h3 {
    margin: 0;
  }
}

.back-btn {
  background: $black;
  font-weight: 700;
  border: none;
  color: $white;
  border-radius: 30px;
  padding: 10px 15px;
  font-family: $type-heading;
  text-transform: uppercase;
  margin-top: 30px;
  font-size: 20px;
}

.answers-container {
  user-select: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin-top: 40px;

  .answer {
    width: 100%;
    height: 60px;
    background: $white;
    border: none;
    cursor: pointer;
    text-align: center;
    font-size: 1rem;

    &.selected {
      background: $black;
      color: $white;
    }

    &:hover {
      background: $black;
      color: $white;
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
  #bottom-noodles {
    svg {
      height: 200vh;
    }
  }

  .question-card {
    width: 60%;
  }

  .answers-container {
    grid-template-columns: repeat(3, 1fr);
    max-height: fit-content;

    .answer {
      height: 150px;
    }
  }
}
</style>