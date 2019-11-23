<template>
    <div>
        <transition name="fade">
            <section v-if="testStarted" id="test-section">
            this is the test section
            </section>
        </transition>
    </div>
</template>

<script>
export default {
  name: "Test",
  props: ["testStarted"]
};
</script>

<style lang="scss" scoped>
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