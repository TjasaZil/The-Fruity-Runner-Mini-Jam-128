<template>
  <div class="main-container">
    <img
      src="../assets/images/illustration-intro.png"
      alt=""
      data-test="hero-picture-test"
      class=".hero-img"
    />
    <h1>
      {{ header }}
    </h1>
    <p>{{ paragraph }}</p>
    <ButtonContainer />
  </div>
</template>

<script>
import ButtonContainer from "./ButtonComponent.vue";
export default {
  name: "HeroContainer",
  components: { ButtonContainer },
  data() {
    return {
      header: "All your files in one secure location, accessible anywhere",
      paragraph:
        "Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.",
    };
  },
};
</script>

<style scoped>
.main-container {
  @apply flex flex-col items-center mx-auto mt-24 w-80 sm:w-96 lg:w-720px;
}
.hero-img {
  @apply w-80 h-56 sm:w-96 sm:h-auto lg:w-720px lg:h-534px;
}
h1 {
  @apply font-semibold text-header w-80 text-center mt-10 lg:w-720px lg:text-4xl;
}
p {
  @apply w-80 text-paragraph text-center mt-6 lg:w-589px lg:text-xl;
}
</style>
