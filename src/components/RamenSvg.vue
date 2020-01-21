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
    <!-- BACKGROUND  -->
    <g id="BG" :class="moodClass">
      <rect y="-2" width="1442" height="966" class="st4" />
      <rect x="0" y="646.6" width="1442" height="319.4" class="st27" />
    </g>

    <g>
      <!-- BOWLS  -->
      <Hipster v-if="bowl === 0" />
      <Classy v-if="bowl === 1" />
      <Local v-if="bowl === 2" />
      <Eclectic v-if="bowl === 3" />
      <Cute v-if="bowl === 4" />
      <Glamorous v-if="bowl === 5" />
      <!-- BROTH AND NOODLES  -->
      <Socialite v-if="brothAndNoodle === 0" />
      <Intellectual v-if="brothAndNoodle === 1" />
      <Leader v-if="brothAndNoodle === 2" />
      <MamaBear v-if="brothAndNoodle === 3" />
      <Artist v-if="brothAndNoodle === 4" />
      <FreeSpirit v-if="brothAndNoodle === 5" />
      <!-- TOPPINGS  -->
      <Optimistic v-if="topping === 0" />
      <Troubled v-if="topping === 1" />
      <Anxious v-if="topping === 3" />
      <Easygoing v-if="topping === 4" />
      <Angry v-if="topping === 5" />
    </g>
  </svg>
</template>

<script>
// Bowls
import Hipster from "./Bowls/Hipster";
import Classy from "./Bowls/Classy";
import Cute from "./Bowls/Cute";
import Eclectic from "./Bowls/Eclectic";
import Glamorous from "./Bowls/Glamorous";
import Local from "./Bowls/Local";
// Toppings
import Angry from "./Topping/Angry";
import Anxious from "./Topping/Anxious";
import Easygoing from "./Topping/Easygoing";
import Optimistic from "./Topping/Optimistic";
import Troubled from "./Topping/Troubled";
// Broth and Noodle
import Artist from "./BrothAndNoodles/Artist";
import FreeSpirit from "./BrothAndNoodles/FreeSpirit";
import Intellectual from "./BrothAndNoodles/Intellectual";
import Leader from "./BrothAndNoodles/Leader";
import MamaBear from "./BrothAndNoodles/MamaBear";
import Socialite from "./BrothAndNoodles/Socialite";

export default {
  name: "RamenSvg",
  props: ["brothAndNoodle", "bowl", "topping", "moodClass"],
  components: {
    // Bowls
    Hipster,
    Classy,
    Cute,
    Eclectic,
    Glamorous,
    Local,
    // Broth and Noodle
    Artist,
    FreeSpirit,
    Intellectual,
    Leader,
    MamaBear,
    Socialite,
    // Toppings
    Angry,
    Anxious,
    Easygoing,
    Optimistic,
    Troubled
  }
};
</script>

<style lang="scss">
@import "../scss/moods/angry";
@import "../scss/moods/anxious";
@import "../scss/moods/disenchanted";
@import "../scss/moods/easygoing";
@import "../scss/moods/optimistic";
@import "../scss/moods/troubled";
</style>