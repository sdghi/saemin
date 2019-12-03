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
  created() {
    this.getIngredientValue();
  },
  computed: mapGetters(["allIngredients"]),
  data() {
    return {
      brothAndNoodleTotal: 0
    };
  },
  methods: {
    getIngredientValue() {
      console.log(this.allIngredients.brothAndNoodle);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>