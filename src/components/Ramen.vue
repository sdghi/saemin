<template>
  <div id="ramen" :class="moodClass">
    <RamenSvg
      :brothAndNoodle="brothAndNoodleRef"
      :topping="toppingRef"
      :bowl="bowlRef"
      :moodClass="moodClass"
    />
  </div>
</template>

<script>
import RamenSvg from "./RamenSvg";

export default {
  name: "Ramen",
  props: ["brothAndNoodleRef", "toppingRef", "bowlRef"],
  components: {
    RamenSvg
  },
  data() {
    return {
      moodClass: ""
    };
  },
  mounted() {
    // Creates mood class for svgs based off of the topping value
    let toppingVal = this.toppingRef;

    if (this.toppingRef !== 2) {
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
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/moods/angry";
@import "../scss/moods/anxious";
@import "../scss/moods/disenchanted";
@import "../scss/moods/easygoing";
@import "../scss/moods/optimistic";
@import "../scss/moods/troubled";

#ramen {
  height: fit-content;
  width: 100%;
  position: relative;
  z-index: 9999;

  svg {
    height: 100%;
    width: 100%;
  }
}

@media (min-width: $breakpoint-medium) {
  #ramen {
    height: 100vh;

    svg {
      position: absolute;
      bottom: 0;
      left: 0;
      height: auto;
    }
  }
}
</style>