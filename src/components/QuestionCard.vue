<template>
    <div class="question-card">
          <h3>This is the question</h3>
          <div class="answers-container">
              <!-- the answer == 1 will be data.value and the value in the input will be pulled data.answerTitle -->
              <input type="submit" @click="setAnswer" class="answer" :class="{'selected': answer == 1}" value="1"/>
              <input type="submit" @click="setAnswer" class="answer" :class="{'selected': answer == 2}" value="2"/>
              <input type="submit" @click="setAnswer" class="answer" :class="{'selected': answer == 3}" value="3"/>
              <input type="submit" @click="setAnswer" class="answer" :class="{'selected': answer == 4}" value="4"/>
          </div>
          <div v-if="answer !== null" class="current-answer">current answer: {{answer}}</div>
        </div>
</template>

<script>
export default {
  name: "QuestionCard",
  data() {
    return {
      answer: null,
      isSelected: false
    };
  },
  methods: {
    setAnswer(e) {
      // sets current answer
      console.log(e.target.value);
      this.answer = e.target.value;

      // sets answer to selected
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