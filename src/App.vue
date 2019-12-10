<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from "@/components/Home";

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style lang="scss">
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  // overflow: hidden;
}

ul {
  padding: 0;
  margin: 0;

  li {
    list-style: none;
  }
}

a {
  text-decoration: none;
}

button:focus {
  outline: none;
}
</style>
