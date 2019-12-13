<template>
    <div class="results-container">
      <div class="intant-ramen-info" v-if="topping.refId === 2">
        <h2 class="ramen-title">You are an instant ramen</h2>
        <p>stop being basic</p>
      </div>
      <div class="ramen-info" v-else-if="topping.refId !== 2">
        <h2 class="ramen-title">You are {{topping.name}}, {{bowl.name}} and {{brothAndNoodle.name}}</h2>
        <div class="description-container">
          <p>You are <strong>{{brothAndNoodle.title}}</strong>.</p>
          <p>{{brothAndNoodle.description}}</p>  
          <p><strong>Toppings:</strong> {{topping.title}}</p>
          <p>{{topping.description}}</p>
          <p><strong>Style:</strong> {{bowl.name}}</p>
        </div>
      </div>
       <Ramen :brothAndNoodleRef="brothAndNoodle.refId" :toppingRef="topping.refId" :bowlRef="bowl.refId"/>
   
      <button class="restart-btn" @click="restartQuiz">restart</button>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Ramen from "./Ramen";

export default {
  name: "Results",
  components: {
    Ramen
  },
  computed: mapGetters([
    "allIngredients",
    "allQuestions",
    "noodlesAndBroth",
    "allNoodlesAndBroth",
    "toppings",
    "allToppings",
    "bowls",
    "allBowls"
  ]),
  data() {
    return {
      brothAndNoodle: null,
      topping: null,
      bowl: null,
      questionCardHeight: null
    };
  },
  created() {
    this.brothAndNoodle = this.getIngredientValue(
      "brothAndNoodle",
      this.allNoodlesAndBroth
    );

    this.topping = this.getIngredientValue("toppings", this.allToppings);

    this.bowl = this.getIngredientValue("bowl", this.allBowls);
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

      // reset all question isAnswered
      this.$store.commit("resetAllAnsweredStatus");

      // reset quiz status to false
      this.$store.commit("setQuizStatus", {
        result: false
      });
    }
  }
};
</script>

<style lang="scss" scoped>
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

.ramen-info {
  padding: 50px;
}

.ramen-title {
  font-size: 2rem;
}

.description-container {
  p {
    font-size: 1.4rem;
  }
}

.results-container {
  display: flex;
  flex-direction: column-reverse;
}

@media (min-width: 1440px) {
  .results-container {
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    place-items: center;
    grid-gap: 20px;
  }

  .ramen-info {
    padding: 0;
  }
}
</style>