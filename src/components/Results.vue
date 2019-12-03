<template>
    <div>
      <h3>You are a {{brothAndNoodle.title}}</h3>

      <p>{{brothAndNoodle.description}}</p>
      <button class="restart-btn" @click="restartQuiz">restart</button>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Results",
  computed: mapGetters([
    "allIngredients",
    "noodlesAndBroth",
    "allQuestions",
    "allNoodlesAndBroth"
  ]),
  data() {
    return {
      brothAndNoodle: null
    };
  },
  created() {
    this.brothAndNoodle = this.getIngredientValue(
      "brothAndNoodle",
      this.allNoodlesAndBroth
    );
  },
  methods: {
    modeValue(array) {
      if (array.length == 0) return null;
      var modeMap = {};
      var maxEl = array[0],
        maxCount = 1;
      for (var i = 0; i < array.length; i++) {
        var el = array[i];
        if (modeMap[el] == null) modeMap[el] = 1;
        else modeMap[el]++;
        if (modeMap[el] > maxCount) {
          maxEl = el;
          maxCount = modeMap[el];
        }
      }
      return maxEl;
    },
    getIngredientValue(value, ingredient) {
      // get the array of ingredient values
      const valueArr = this.allIngredients[value];
      // the most occured value in the array
      const indexValue = this.modeValue(valueArr);
      return ingredient[indexValue];
    },
    restartQuiz() {
      // Scroll to top of page when quiz is restarted
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      // Clear ingredient arrays
      this.$store.commit("clearIngredients");
      // Set global quiz started to false
      this.$store.commit("setQuizStarted", {
        value: false
      });
      // sets the isAnswered to true if answer is selected
      this.allQuestions.map(question => {
        this.$store.commit("setQuestionsToAnswered", {
          selected: question,
          value: false
        });
      });

      // reset quiz status to false
      this.$store.commit("setQuizStatus", {
        result: false
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/partials/_variables.scss";

.restart-btn {
  position: fixed;
  bottom: 2.5%;
  right: 5%;
  padding: 20px 15px 15px 15px;
}

button {
  background: $black;
  font-weight: 700;
  padding-top: 5px;
  border: none;
  color: $white;
  border-radius: 30px;
  font-family: $type-heading;
  text-transform: uppercase;
}
</style>