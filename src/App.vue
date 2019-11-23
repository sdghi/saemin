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

<style>
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
}
</style>
