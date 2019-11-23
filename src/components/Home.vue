<template>
    <div id="app-container">
        <h1 class="home-title" :class="{'quiz-started': quizStarted}">This is the home page</h1>
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
#app-container {
  min-height: 100vh;
  width: 100%;
}

.home-title {
  position: relative;
  top: 2.5%;
  text-align: center;
  font-size: 2vw;
  transition: all 0.3s ease-out;
  transform: translateY(40vh) scale(3);
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