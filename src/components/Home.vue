<template>
    <div id="app-container">
        <div class="home-title" :class="{'quiz-started': quizStarted}">
          <h1>Saemin</h1>
          <h1>Generator</h1>
        </div>
        <p v-if="!quizStarted" class="home-subtitle">What Would You Be As Ramen Noodle Soup?</p>
        <button v-if="!quizStarted" class="start-quiz-btn" @click="quizStarted = true">take quiz</button>
        <button v-if="quizStarted" class="restart-btn" @click="restartQuiz">restart</button>
        <Quiz :quizStarted="quizStarted"/>
        <Results v-if="quizCompleted"/>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Quiz from "./Quiz";
import Results from "./Results";

export default {
  name: "Home",
  computed: mapGetters(["allQuestions"]),
  components: {
    Quiz,
    Results
  },
  data() {
    return {
      quizStarted: false,
      quizCompleted: false
    };
  },
  updated() {
    this.checkIfCompleted();
  },
  methods: {
    restartQuiz() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      this.$store.commit("clearIngredients");
      this.quizStarted = false;
    },
    checkIfCompleted() {
      for (let i = 0; i < this.allQuestions.length; i++) {
        if (this.allQuestions[i].isAnswered === false) {
          console.log("a question is not answered");
          break;
        }

        console.log("all questions are answered");
        this.quizCompleted = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";
@import "@/scss/partials/_variables";

#app-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    $accent-color 0%,
    $accent-color 0%,
    $background 100vh
  );
}

.home-title {
  width: fit-content;
  margin: 30vh auto 0 auto;
  font-size: 6vmin;
  transition: all 0.3s $cubic-ease;

  h1 {
    font-family: $type-heading-italic;
    margin: 0;
    position: relative;

    &:first-of-type {
      left: -8vw;
    }

    &:nth-of-type(2) {
      left: 8vw;
    }
  }
}

.home-subtitle {
  text-align: center;
  font-size: 5vmin;
  width: 80%;
  margin: 2rem auto 0 auto;
}

.home-title.quiz-started {
  transform: translateY(-15vh);
}

button {
  background: $black;
  font-weight: 700;
  padding-top: 5px;
  border: none;
  color: $white;
  border-radius: 30px;
  font-family: $type-heading;
  text-transform: uppercase;
}

.start-quiz-btn {
  margin-top: 50px;
  position: relative;
  left: calc(50% - 100px);
  height: 60px;
  width: 200px;
  font-size: 30px;
}

.restart-btn {
  position: fixed;
  bottom: 2.5%;
  right: 5%;
  padding: 20px 15px 15px 15px;
}

@media (min-width: $breakpoint-small) {
  .restart-btn {
    right: 2.5%;
    padding: 20px 25px 15px 25px;
    font-size: 30px;
  }
}
</style>