<template>
  <transition name="fade">
      <section v-if="quizStarted" id="quiz-section">
        <ScrollDownCta/>
        <Question/>
      </section>
  </transition>
</template>

<script>
import ScrollDownCta from "./ScrollDownCta";
import Question from "./Question";

export default {
  name: "Quiz",
  components: {
    ScrollDownCta,
    Question
  },
  props: ["quizStarted"]
};
</script>

<style lang="scss" scoped>
#quiz-section {
  padding-bottom: 10vh;
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>