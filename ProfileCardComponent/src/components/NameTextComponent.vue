<template>
  <section class="flex flex-col content-center m-auto w-32 text-center mt-6">
    <h1
      data-test="name-test"
      class="text-very-dark-blue font-semibold text-base md:text-lg flex flex-row w-36 justify-evenly"
    >
      {{ name }}
      <span
        data-test="age-test"
        class="font-normal text-dark-grayish-blue ml-2"
        >{{ age }}</span
      >
    </h1>
    <h2
      data-test="location-test"
      class="font-normal text-dark-grayish-blue text-sm mt-2"
    >
      {{ location }}
    </h2>
  </section>
</template>

<script>
export default {
  name: "NameTextComponent",
  data() {
    return {
      name: "Victor Crest",
      age: "26",
      location: "London",
    };
  },
};
</script>
