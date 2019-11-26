<template>
    <div class="question">
     
        <QuestionCard/>
    </div>
</template>

<script>
import QuestionCard from "./QuestionCard";

export default {
  name: "Question",
  components: {
    QuestionCard
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/partials/_variables";

.question {
  background: $background;
  width: 100%;
  height: fit-content;
}
</style>