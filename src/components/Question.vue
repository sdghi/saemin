<template>
    <div class="question">
        <h3>This is the question</h3>
        <div>this is where you will reference the answers templates</div>
    </div>
</template>

<script>
export default {
  name: "Question"
};
</script>

<style lang="scss" scoped>
@import "@/scss/partials/_variables";

.question {
  width: 90%;
  margin: 0 auto;
  background: black;
  color: white;
  padding: 50px;
}

@media (min-width: 768px) {
  .question {
    width: 60%;
  }
}
</style>