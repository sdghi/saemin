<template>
  <section class="results-container">
    <div id="info-container">
      <YouAreSvg />
      <div class="ramen-info" v-if="topping.refId === 2">
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
          <p>{{ topping.description }}</p>
        </div>
      </div>
      <BackBtn
        content="try again!"
        btnStyle="restart"
        :btnEvent="restartQuiz"
      />
    </div>
    <Ramen
      :brothAndNoodleRef="brothAndNoodle.refId"
      :toppingRef="topping.refId"
      :bowlRef="bowl.refId"
      v-if="topping.refId !== 2"
    />
    <CupNoodle v-if="topping.refId === 2" />

    <BottomLeft status="blue" />
    <TopRight status="blue" />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Ramen from "./Ramen";
import CupNoodle from "./CupNoodle";
import BottomLeft from "./Illustrations/BottomLeft";
import TopRight from "./Illustrations/TopRight";
import BackBtn from "./BackBtn";
import YouAreSvg from "./Illustrations/YouAreSvg";

export default {
  name: "Results",
  components: {
    BottomLeft,
    TopRight,
    Ramen,
    CupNoodle,
    BackBtn,
    YouAreSvg
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
  position: relative;
  z-index: 900;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  width: 80%;
  padding: 40px 0;
}

.ramen-info {
  margin-top: -40px;
  p {
    font-size: 1.7rem;
    margin-bottom: 1.2rem;
    line-height: 1.4;
  }
}

strong {
  font-weight: 900;
}

.ramen-title {
  font-size: 3rem;
  text-transform: lowercase;
  color: $white;
}

.description-container {
  p {
    font-size: 1.7rem;
    margin-bottom: 1.2rem;
    line-height: 1.4;
  }
}

@media (min-width: $breakpoint-medium) {
  #info-container {
    width: 50%;
    padding: 50px;
  }

  .results-container {
    height: 100vh;
    overflow: hidden;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
  }

  .ramen-info {
    padding: 0;
  }
}
</style>