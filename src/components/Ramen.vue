<template>
    <div class="ramen">
      <div class="instant-ramen" v-if="toppingRef === 2">
        instant ramen
      </div>
      <div class="regular-ramen" v-else-if="toppingRef !== 2">
        <h3>broth and noodle: {{brothAndNoodleRef}}</h3>
        <h3>topping: {{toppingRef}}</h3>
        <h3>bowl: {{bowlRef}}</h3>
      </div>
    </div>
</template>

<script>
export default {
  name: "Ramen",
  props: ["brothAndNoodleRef", "toppingRef", "bowlRef"]
};
</script>

<style lang="scss" scoped>
.ramen {
  height: 100vh;
  width: 100%;
  background: red;
}
</style>