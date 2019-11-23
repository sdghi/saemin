<template>
  <transition name="fade">
      <section v-if="quizStarted" id="quiz-section">
        <Question/>
      </section>
  </transition>
</template>

<script>
import Question from "./Question";

export default {
  name: "Quiz",
  components: {
    Question
  },
  props: ["quizStarted"]
};
</script>

<style lang="scss" scoped>
#quiz-section {
  padding: 10vh 0;
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>