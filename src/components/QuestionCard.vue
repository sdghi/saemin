<template>
    <div class="question-card">
          <h3>{{question.content}}</h3>
          <div class="answers-container">
              <!-- the answer == 1 will be data.value and the value in the input will be pulled data.answerTitle -->
              <button v-for="answer in question.answers" :key="answer.id" 
              @click="setAnswer" 
              :data-currentAnswer="answer.content"
              class="answer" 
              :class="{'selected': currentAnswer == answer.content}" 
              :value="answer.value"
              >{{answer.content}}</button>
          </div>
        </div>
</template>

<script>
export default {
  name: "QuestionCard",
  props: ["question", "allQuestions", "quizCompleted"],
  updated() {
    console.log("updated: quizCompleted", this.quizCompleted);
  },
  data() {
    return {
      currentAnswer: null,
      isSelected: false,
      index: this.allQuestions.indexOf(this.question)
    };
  },
  methods: {
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
    },
    checkIfCompleted() {
      for (let i = 0; i < this.allQuestions.length; i++) {
        if (this.allQuestions[i].isAnswered === false) {
          console.log("a question is not answered");
          console.log("questions answered", this.quizCompleted);
          break;
        }

        console.log("all questions are answered");
        // run setQuizCompleted Mutation
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/partials/_variables";

.question-card {
  margin: 0 auto;
  background: $card-color;
  color: $black;
  padding: 50px;

  h3 {
    font-size: 2rem;
  }
}

// May break into another component later
.answers-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: 20px;
  max-height: 40vh;
  // allow for scroll for questions with a lot of answers
  overflow-y: auto;

  .answer {
    width: 100%;
    height: 150px;
    background: $white;
    border: none;
    cursor: pointer;
    text-align: center;
    font-size: 2rem;

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

@media (min-width: 768px) {
  .question-card {
    width: 60%;
  }

  .answers-container {
    max-height: fit-content;
  }
}
</style>