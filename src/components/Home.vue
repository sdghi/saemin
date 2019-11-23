<template>
    <div id="app-container">
        <h1 class="home-title" :class="{'quiz-started': quizStarted}">SDG Saemin Generator</h1>
        <h3 v-if="!quizStarted" class="home-subtitle">What kind of ramen are you? Take the quiz to find out.</h3>
        <button v-if="!quizStarted" class="start-quiz-btn" @click="quizStarted = true">click to begin</button>
        <Quiz :quizStarted="quizStarted"/>
    </div>
</template>

<script>
import Quiz from "./Quiz";

export default {
  name: "Home",
  components: {
    Quiz
  },
  data() {
    return {
      quizStarted: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables";

#app-container {
  min-height: 100vh;
  width: 100%;
}

.home-title {
  position: relative;
  top: 2.5%;
  text-align: center;
  font-size: 1.3rem;
  transition: all 0.3s ease-out;
  transform: translateY(40vh) scale(1.5);
}

.home-subtitle {
  position: relative;
  text-align: center;
  top: 45vh;
  font-size: 2rem;
  width: 80%;
  margin: 0 auto;
  font-size: 1.3rem;
}

@media (min-width: $breakpoint-small) {
  .home-title {
    transform: translateY(40vh) scale(3.5);
  }

  .home-subtitle {
    font-size: 2rem;
  }
}

.home-title.quiz-started {
  transform: translateY(0) scale(1);
}

.start-quiz-btn {
  height: 50px;
  width: 100px;
  position: absolute;
  top: 60%;
  left: calc(50% - 50px);
}
</style>