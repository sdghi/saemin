<template>
    <div id="app-container">
        <h1 class="home-title" :class="{'test-started': testStarted}">This is the home page</h1>
        <button v-if="!testStarted" class="start-test-btn" @click="testStarted = true">click to begin</button>
        <transition name="fade">
            <section v-if="testStarted" id="test-section">
            this is the test section
            </section>
        </transition>
    </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      testStarted: false
    };
  }
};
</script>

<style lang="scss" scoped>
#app-container {
  min-height: 100vh;
  width: 100%;
}

.home-title {
  position: relative;
  top: 2.5%;
  text-align: center;
  font-size: 2vw;
  transition: all 0.3s ease;
  transform: translateY(40vh) scale(3);
}

.home-title.test-started {
  transform: translateY(0) scale(1);
}

.start-test-btn {
  height: 50px;
  width: 100px;
  position: absolute;
  top: 60%;
  left: calc(50% - 50px);
}

#test-section {
  background: red;
  height: 100vh;
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>