<template>
    <div class="question-card" ref="quizQuestion">
          
          <div class="question-container">
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
            <button @click="goBack">back</button>
          </div>
         
          
          <!-- this is the illustration -->
          <div class="line"></div>
        </div>
</template>

<script>
export default {
  name: "QuestionCard",
  props: [
    "question",
    "allQuestions",
    "quizCompleted",
    "setScrollHeight",
    "scrollHeight"
  ],
  data() {
    return {
      currentAnswer: null,
      isSelected: false,
      index: this.allQuestions.indexOf(this.question)
    };
  },
  updated() {
    this.checkIfCompleted();
  },
  methods: {
    goBack() {
      const backDistance =
        this.scrollHeight - this.$refs.quizQuestion.clientHeight;

      console.log("back distance ", backDistance);

      document.body.style.transform = `translateY(-${backDistance}px)`;
    },
    setAnswer(e) {
      // sets current answer
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

      // If it's the last question wait for the results to load
      if (this.index !== this.allQuestions.length - 1) {
        document.body.style.transform = `translateY(-${this.scrollHeight}px)`;
      } else {
        // this.$refs.quizQuestion.style.transition = "none";
        this.$refs.quizQuestion.style.opacity = 0;
        document.body.style.transform = `translateY(0px)`;

        // setTimeout(() => {
        //   window.scrollTo({
        //     top: 0
        //   });
        // }, 1000);
      }

      this.isSelected = true;
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
.question-card {
  margin: 0 auto;
  color: $black;
  // padding: 50px;
  transition: none;

  h3 {
    font-size: 2rem;
  }
}

// delete this later it is the fake illustration
.line {
  height: 50vh;
  width: 80px;
  margin: 0 auto;
  background: black;
}

// May break into another component later
.question-container {
  background: $card-color;
  padding: 50px;

  h3 {
    margin: 0;
  }
}

.answers-container {
  user-select: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin-top: 40px;

  .answer {
    width: 100%;
    height: 100px;
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

@media (min-width: 768px) {
  .question-card {
    width: 60%;
  }

  .answers-container {
    grid-template-columns: repeat(3, 1fr);
    max-height: fit-content;
  }
}
</style>