<template>
    <div id="app-container">
        <HeroIllustration/>
        <div v-if="!quizStarted" class="home-content" >
          <h1 class="home-title uppercase text-center">Generator</h1>
          <p class="home-subtitle">What kind of saimin are you?</p>
          <button class="start-quiz-btn" @click="startQuiz">take the quiz</button>
        </div>
        <Quiz :quizStarted="quizStarted"/>
        <Results v-if="quizCompleted"/>
    </div>
</template>

<script>
import HeroIllustration from './HeroIllustration.vue';
import "scroll-behavior-polyfill";
import { mapGetters } from "vuex";
import Quiz from "./Quiz";
import Results from "./Results";

export default {
  name: "Home",
  computed: mapGetters([
    "allQuestions",
    "quizCompleted",
    "quizStarted",
    "scrollHeight",
    "setQuizStarted"
  ]),
  methods: {
    startQuiz() {
      this.$store.commit("setQuizStarted", {
        value: true
      });
    }
  },
  updated() {
    // scroll jack until all question are answered
    if (this.quizStarted) {
      document.body.style.overflow = "hidden";
    }
    if (this.quizCompleted) {
      document.body.style.overflow = "initial";
    }
  },
  components: {
    Quiz,
    Results,
    HeroIllustration
  }
};
</script>

<style lang="scss" scoped>
#app-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    $accent-color 0%,
    $accent-color 0%,
    $background 100vh
  );
}

.home-content{
  position: relative;
  z-index: 10;
  margin-top: 30vh;
  text-align: center;
}

.home-title {
  margin: 0;
  font-size: 6vmin;
  transition: all 0.3s $cubic-ease;

  h1 {
    font-family: $type-heading-italic;
    position: relative;

    &:first-of-type {
      left: -8vw;
    }

    &:nth-of-type(2) {
      left: 8vw;
    }
  }
}

p {
  line-height: 1.3;
}

.home-subtitle {
  text-align: center;
  font-size: 5vmin;
}

.start-quiz-btn{
  background: none;
  border: none;
  font-size: 2rem;
  margin-top: 1rem;
}

</style>