<template>
    <div class="question-card">
          <h3>This is the question</h3>
          <div class="answers-container">
              <input @click="getAnswer" class="answer" value="1"/>
              <input @click="getAnswer" class="answer" value="2"/>
              <input @click="getAnswer" class="answer" value="3"/>
              <input @click="getAnswer" class="answer" value="4"/>
          </div>
        </div>
</template>

<script>
export default {
  name: "QuestionCard",
  methods: {
    getAnswer(e) {
      console.log(e.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/partials/_variables";

.question-card {
  width: 90%;
  margin: 0 auto;
  background: $card-color;
  color: $black;
  padding: 50px;

  h3 {
    font-size: 2rem;
  }
}

@media (min-width: 768px) {
  .question-card {
    width: 60%;
  }
}

// May break into another component later
.answers-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: 20px;
  max-height: 40vh;
  // allow for scroll for questions with a lot of answers
  overflow-y: auto;

  .answer {
    width: 100%;
    height: 150px;
    background: $white;
    border: none;
    cursor: pointer;
    text-align: center;
    font-size: 2rem;

    &:hover {
      background: $black;
      color: $white;
    }
  }
}

@media (min-width: $breakpoint-small) {
  .answers-container {
    overflow-y: initial;
  }
}
</style>