<template>
  <section id="home">
    <header>
      <h2>KUNG HEI FAT CHOY! HAPPY NEW YEAR!</h2>
      <BottomRidge />
    </header>
    <HeroIllustration />
    <div class="home-content">
      <h1 class="home-title uppercase text-center">Generator</h1>
      <p class="home-subtitle">What kind of saimin are you?</p>
      <button class="start-quiz-btn" @click="startQuiz">take the quiz</button>
    </div>
  </section>
</template>

<script>
import HeroIllustration from "./HeroIllustration";
import BottomRidge from "./BottomRidge";

export default {
  name: "Landing",
  components: {
    HeroIllustration,
    BottomRidge
  },
  methods: {
    startQuiz() {
      this.$store.commit("setQuizStarted", {
        value: true
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#home {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background: $pink;

  .home-content {
    position: absolute;
    z-index: 10;
    top: 50%;
    text-align: center;
  }
}

header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 1.3;
  font-weight: 700;
  border: 1px solid green;
  color: $pink;
  background: $white;
  text-align: center;
  height: 10vh;
  display: grid;
  place-items: center;

  h2 {
    position: relative;
    z-index: 7;
    font-size: 2rem;
    width: fit-content;
    top: 10%;
  }

  svg {
    position: absolute;
    bottom: -10%;
    left: 0;
    z-index: 1;
    min-width: 100%;
  }
}

.home-title {
  margin: 0;
  font-size: 6vmin;
  transition: all 0.3s $cubic-ease;

  h1 {
    font-family: $type-heading-italic;
    position: relative;

    &:first-of-type {
      left: -8vw;
    }

    &:nth-of-type(2) {
      left: 8vw;
    }
  }
}

p {
  line-height: 1.3;
}

.home-subtitle {
  text-align: center;
  font-size: 5vmin;
}

.start-quiz-btn {
  background: none;
  border: none;
  font-size: 2rem;
  margin-top: 1rem;
}
</style>