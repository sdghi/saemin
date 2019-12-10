<template>
    <div>
      <div class="question" v-for="question in allQuestions" :key="question.id" ref="question">
          <QuestionCard  :question="question" :allQuestions="allQuestions" :quizCompleted="quizCompleted"/>
      </div>
    </div>
</template>

<script>
import QuestionCard from "./QuestionCard";
import { mapGetters } from "vuex";

export default {
  name: "Question",
  computed: mapGetters(["allQuestions", "quizCompleted"]),
  components: {
    QuestionCard
  },
  data() {
    return {
      startingScrollHeight: 864
    };
  },
  created() {
    // Will handle initial scroll down to first question when starting quiz
    setTimeout(() => {
      window.scrollTo({
        top: this.startingScrollHeight,
        behavior: "smooth"
      });
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
.question {
  width: 100%;
  height: fit-content;
}
</style>