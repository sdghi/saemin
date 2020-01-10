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
  >
    <BowlOne v-if="bowl === 4" />
    <BowlTwo v-if="bowl !== 4" />
  </svg>
</template>

<script>
import BowlOne from "./Bowls/BowlOne";
import BowlTwo from "./Bowls/BowlTwo";

export default {
  name: "RamenSvg",
  props: ["brothAndNoodle", "bowl", "topping"],
  components: {
    BowlOne,
    BowlTwo
  },
  mounted() {
    if (this.topping === 2) {
      console.log("instant ramen");
    } else {
      console.log(
        `broth and noodle: ${this.brothAndNoodle}, topping: ${this.topping}, bowl: ${this.bowl}`
      );
    }
  }
};
</script>

<style lang="scss" scoped>
</style>