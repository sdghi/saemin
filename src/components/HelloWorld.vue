<template>
  <div class="hello">
    <h1>Saemin Generator</h1>
    <h3>Coming Soon</h3>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 5rem;
  }

  h3 {
    font-size: 3rem;
  }
}
</style>
