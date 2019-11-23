<template>
    <div>
        <transition name="fade">
            <section v-if="quizStarted" id="quiz-section">
            this is the test section
            </section>
        </transition>
    </div>
</template>

<script>
export default {
  name: "Quiz",
  props: ["quizStarted"]
};
</script>

<style lang="scss" scoped>
#quiz-section {
  background: red;
  padding: 20vh 0;
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