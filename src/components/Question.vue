<template>
    <div>
      <div class="question" v-for="question in allQuestions" :key="question.id" ref="question">
          <QuestionCard  :question="question" :allQuestions="allQuestions" :quizCompleted="quizCompleted" :scrollHeight="scrollHeight"/>
      </div>
    </div>
</template>

<script>
import QuestionCard from "./QuestionCard";
import { mapGetters } from "vuex";

export default {
  name: "Question",
  computed: mapGetters(["allQuestions", "quizCompleted", "scrollHeight"]),
  components: {
    QuestionCard
  }
};
</script>

<style lang="scss" scoped>
.question {
  width: 100%;
  height: fit-content;
}
</style>