<template>
  <section class="results-container">
    <div id="info-container">
      <div class="intant-ramen-info" v-if="topping.refId === 2">
        <h2 class="ramen-title">An instant ramen.</h2>
        <p>
          When presented with a choice, you reliably choose the easier.
          Immediate gratification is routinely sought at the expense of basic
          health and hygiene. Maybe try a little harder?
        </p>
      </div>
      <div class="ramen-info" v-else-if="topping.refId !== 2">
        <h2 class="ramen-title">
          {{ topping.starter }} {{ topping.name }} {{ bowl.name }}
          {{ brothAndNoodle.name }}.
        </h2>
        <div class="description-container">
          <p>
            You are <strong>{{ brothAndNoodle.title }}</strong
            >.
          </p>
          <p>{{ brothAndNoodle.description }}</p>
          <p><strong>Toppings:</strong> {{ topping.title }}</p>
          <p>{{ topping.description }}</p>
          <p><strong>Style:</strong> {{ bowl.name }}</p>
        </div>
      </div>
    </div>
    <Ramen
      :brothAndNoodleRef="brothAndNoodle.refId"
      :toppingRef="topping.refId"
      :bowlRef="bowl.refId"
      v-if="topping.refId !== 2"
    />
    <CupNoodle v-if="topping.refId === 2" />

    <button class="restart-btn" @click="restartQuiz">restart</button>
    <BottomLeft />
    <TopRight />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Ramen from "./Ramen";
import CupNoodle from "./CupNoodle";
import BottomLeft from "./Illustrations/BottomLeft";
import TopRight from "./Illustrations/TopRight";

export default {
  name: "Results",
  components: {
    BottomLeft,
    TopRight,
    Ramen,
    CupNoodle
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
.results-container {
  display: flex;
  flex-direction: column;
  background: $textBlue;
  position: relative;
}

#info-container {
  min-height: 100vh;
  display: grid;
  place-items: center;
  margin: 50px auto 0 auto;
  width: 60%;
}

.ramen-title {
  font-size: 3rem;
  text-transform: lowercase;
  color: $white;
}

.description-container {
  p {
    font-size: 1.4rem;
  }
}

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

@media (min-width: $breakpoint-medium) {
  #info-container {
    margin: 0 auto;
  }

  .results-container {
    height: 100vh;
    overflow: hidden;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
  }

  .ramen-info {
    padding: 0;
  }
}
</style>