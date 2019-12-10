<template>
    <section ref="scrollCta">
        first scroll section
    </section>
</template>

<script>
export default {
  name: "ScrollDownCta",
  props: ["scrollCtaHeight"]
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