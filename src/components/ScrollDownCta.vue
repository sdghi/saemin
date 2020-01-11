<template>
  <section ref="scrollCta">
    first scroll section remove padding later
  </section>
</template>

<script>
import "scroll-behavior-polyfill";

export default {
  name: "ScrollDownCta",
  props: ["scrollCtaHeight", "quizStarted"],
  mounted() {
    // Will handle initial scroll down to first question when starting quiz
    this.quizStarted &&
      setTimeout(() => {
        window.scrollTo({
          top:
            this.$refs.scrollCta.offsetHeight + this.$refs.scrollCta.offsetTop,
          behavior: "smooth"
        });
      });
  }
};
</script>

<style lang="scss" scoped>
section {
  // remove padding once illustration goes in
  padding: 15vh;
  text-align: center;
  font-size: 5vmin;
}
</style>