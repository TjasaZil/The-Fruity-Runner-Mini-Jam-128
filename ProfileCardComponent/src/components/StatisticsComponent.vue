<template>
  <div
    class="grid grid-rows-2 grid-cols-3 content-center text-center mb-3 w-60 mx-auto md:w-64 justify-between"
  >
    <div
      v-for="number in numbers"
      :key="number"
      data-test="numbers-testing"
      class="text-lg text-very-dark-blue font-bold"
    >
      {{ number }}
    </div>
    <div
      v-for="text in texts"
      :key="text"
      data-test="text-data-test"
      class="text-xs text-dark-grayish-blue font-normal"
    >
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "StatisticsComponent",
  data() {
    return {
      numbers: ["80K", "803K", "1.4K"],
      texts: ["Followers", "Likes", "Photos"],
    };
  },
};
</script>
