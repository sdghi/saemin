<template>
    <section ref="scrollCta">
        first scroll section
    </section>
</template>

<script>
export default {
  name: "ScrollDownCta",
  props: ["scrollCtaHeight", "quizStarted"],
  mounted() {
    // Will handle initial scroll down to first question when starting quiz
    this.quizStarted &&
      setTimeout(() => {
        console.log("height", this.$refs.scrollCta.offsetHeight);
        console.log("top", this.$refs.scrollCta.offsetTop);

        window.scrollTo({
          top:
            this.$refs.scrollCta.offsetHeight + this.$refs.scrollCta.offsetTop,
          behavior: "smooth"
        });
      }, 1000);
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