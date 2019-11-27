<template>
    <div>
      <div class="question" v-for="question in allQuestions" :key="question.id">
          <QuestionCard :question="question" :allQuestions="allQuestions"/>
      </div>
    </div>
</template>

<script>
import QuestionCard from "./QuestionCard";
import { mapGetters } from "vuex";

export default {
  name: "Question",
  computed: mapGetters(["allQuestions"]),
  components: {
    QuestionCard
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/partials/_variables";

.question {
  width: 100%;
  height: fit-content;
}
</style>