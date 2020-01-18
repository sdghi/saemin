<template>
  <transition name="fade">
    <section v-if="quizStarted" id="quiz-section">
      <ScrollDownCta :quizStarted="quizStarted" />
      <Question />
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
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s $cubic-ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>