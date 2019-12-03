<template>
    <div>
            <div v-for="ingredient in allIngredients" :key="ingredient.index">
                {{ingredient}}
            </div>
            <h1>{{brothAndNoodleTotal}}</h1>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Results",
  computed: mapGetters(["allIngredients", "noodlesAndBroth"]),
  data() {
    return {
      brothAndNoodleTotal: "hi"
    };
  },
  created() {
    this.brothAndNoodleTotal = this.getIngredientValue("brothAndNoodle");
  },
  methods: {
    getIngredientValue(value) {
      return this.allIngredients[value];
    }
  }
};
</script>

<style lang="scss" scoped>
</style>