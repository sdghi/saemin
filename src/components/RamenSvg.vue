<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 1442 966"
    style="enable-background:new 0 0 1442 966;"
    xml:space="preserve"
    :class="moodClass"
  >
    <g id="BG" :class="moodClass">
      <rect y="-2" class="st4" width="1442" height="966" />
      <rect x="0" y="646.6" class="st27" width="1442" height="319.4" />
    </g>
    <Hipster v-if="bowl === 0" :moodClass="moodClass" />
    <Classy :moodClass="moodClass" />
    <BrothAndNoodleOne v-if="brothAndNoodle % 2 == 0" />
    <BrothAndNoodleTwo v-if="brothAndNoodle % 2 !== 0" />
    <ToppingOne v-if="topping % 2 == 0" />
    <ToppingTwo v-if="topping % 2 !== 0" />
  </svg>
</template>

<script>
import Hipster from "./Bowls/Hipster";
import Classy from "./Bowls/Classy";
import BrothAndNoodleOne from "./BrothAndNoodles/BrothAndNoodleOne";
import BrothAndNoodleTwo from "./BrothAndNoodles/BrothAndNoodleTwo";
import ToppingOne from "./Topping/ToppingOne";
import ToppingTwo from "./Topping/ToppingTwo";

export default {
  name: "RamenSvg",
  props: ["brothAndNoodle", "bowl", "topping"],
  components: {
    Hipster,
    Classy,
    BrothAndNoodleOne,
    BrothAndNoodleTwo,
    ToppingOne,
    ToppingTwo
  },
  data() {
    return {
      moodClass: ""
    };
  },
  mounted() {
    if (this.topping === 2) {
      console.log("instant ramen");
    } else {
      console.log(
        `broth and noodle: ${this.brothAndNoodle}, topping: ${this.topping}, bowl: ${this.bowl}`
      );
    }

    let toppingVal = this.topping;

    switch (toppingVal) {
      case 0:
        this.moodClass = "optimistic";
        break;
      case 1:
        this.moodClass = "troubled";
        break;
      case 2:
        this.moodClass = "disenchanted";
        break;
      case 3:
        this.moodClass = "anxious";
        break;
      case 4:
        this.moodClass = "easygoing";
        break;
      case 5:
        this.moodClass = "angry";
        break;
      default:
        break;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/ramenMoods/anxious";
@import "../scss/ramenMoods/angry";
@import "../scss/ramenMoods/disenchanted";
@import "../scss/ramenMoods/troubled";
@import "../scss/ramenMoods/optimistic";
@import "../scss/ramenMoods/easygoing";
</style>