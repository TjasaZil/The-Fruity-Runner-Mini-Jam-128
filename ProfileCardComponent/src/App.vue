<template>
  <body
    class="flex flex-col items-center justify-center bg-dark-cyan w-screen h-screen"
  >
    <MainComponent />
  </body>
</template>

<script>
import MainComponent from "./components/MainComponent.vue";

export default {
  name: "App",
  components: {
    MainComponent,
  },
};
</script>
