<template>
  <div class="ramen">
    <RamenSvg
      :brothAndNoodle="brothAndNoodleRef"
      :topping="toppingRef"
      :bowl="bowlRef"
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
  }
};
</script>

<style lang="scss" scoped>
.ramen {
  height: fit-content;
  width: 100%;
  position: relative;

  svg {
    height: 100%;
    width: 100%;
  }
}

@media (min-width: $breakpoint-medium) {
  .ramen {
    height: 100vh;

    svg {
      /* border: 1px solid red; */
      position: absolute;
      bottom: 0;
      left: 0;
      height: 100vh;

      #bg {
        height: 100vh;
      }
    }
  }
}
</style>