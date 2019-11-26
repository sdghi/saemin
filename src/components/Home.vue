<template>
    <div id="app-container">
        <div class="home-title" :class="{'quiz-started': quizStarted}">
          <h1>Saemin</h1>
          <h1>Generator</h1>
        </div>
        <h3 v-if="!quizStarted" class="home-subtitle">What Would You Be As Ramen Noodle Soup?</h3>
        <button v-if="!quizStarted" class="start-quiz-btn" @click="quizStarted = true">take quiz</button>
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
@import "@/scss/partials/_variables";

#app-container {
  min-height: 100vh;
  width: 100%;
}

.home-title {
  width: fit-content;
  margin: 30vh auto 0 auto;
  font-size: 6vmin;
  transition: all 0.3s ease-out;

  h1 {
    margin: 0;
    position: relative;

    &:first-of-type {
      left: -5vw;
    }

    &:nth-of-type(2) {
      left: 5vw;
    }
  }
}

.home-subtitle {
  text-align: center;
  font-size: 3vmin;
  width: 80%;
  margin: 2rem auto 0 auto;
}

.home-title.quiz-started {
  transform: translateY(-15vh);
}

.start-quiz-btn {
  background: $black;
  font-weight: 700;
  border: none;
  color: $white;
  border-radius: 30px;
  height: 50px;
  width: 100px;
  margin-top: 50px;
  position: relative;
  left: calc(50% - 50px);
}
</style>