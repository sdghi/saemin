<template>
    <div class="question-card">
          <h3>{{question.content}}</h3>
          <div class="answers-container">
              <!-- the answer == 1 will be data.value and the value in the input will be pulled data.answerTitle -->
              <input v-for="answer in question.answers" :key="answer.id" 
              type="submit" 
              @click="setAnswer" 
              class="answer" 
              :class="{'selected': currentAnswer == answer.content}" 
              :value="answer.content"
              >
          </div>
          <div v-if="currentAnswer !== null" class="current-answer">current answer: {{currentAnswer}}</div>
        </div>
</template>

<script>
export default {
  name: "QuestionCard",
  props: ["question"],
  data() {
    return {
      currentAnswer: null,
      isSelected: false,
    };
  },
  methods: {
    setAnswer(e) {
      // sets current answer
      console.log(e.target.value);
      this.currentAnswer = e.target.value;
      this.isSelected = true;
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

@media (min-width: 768px) {
  .question-card {
    width: 60%;
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

@media (min-width: $breakpoint-small) {
  .answers-container {
    overflow-y: initial;
  }
}
</style>