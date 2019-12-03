<template>
    <div class="ramen">
        <h3>broth and noodle: {{brothAndNoodleRef}}</h3>
    </div>
</template>

<script>
export default {
  name: "Ramen",
  props: ["brothAndNoodleRef"]
};
</script>

<style lang="scss" scoped>
.ramen {
  height: 80vh;
  width: 100%;
  background: red;
}
</style>