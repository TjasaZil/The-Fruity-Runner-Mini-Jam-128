<template>
  <div class="container">
    <img
      src="../assets/images/illustration-stay-productive.png"
      alt=""
      class="image"
      data-test="test-image"
    />
    <div class="flex flex-col xl:my-auto">
      <h2 class="head font-['Raleway']">{{ header }}</h2>
      <p data-test="grid-paragraph-test" class="font-['Open Sans'] para">
        {{ paragraphone }}
      </p>
      <p data-test="grid-paragraph-test" class="font-['Open Sans'] para">
        {{ paragraphtwo }}
      </p>

      <div class="flex flex-row mt-5 border-b-2 border-cyan-bg w-32 xl:ml-9">
        <p
          class="text-cyan-bg font-light text-xs hover:text-white hover:cursor-pointer hover:border-white"
        >
          {{ clickable }}
        </p>

        <img
          src="../assets/images/icon-arrow.svg"
          alt="arrow"
          data-test="test-image"
          class="w-5 h-5 ml-1"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductiveComponent",
  data() {
    return {
      header: "Stay productive. wherever you are",
      paragraphone:
        "Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs. ",
      paragraphtwo:
        "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required. ",
      clickable: "See how Fylo Works",
    };
  },
};
</script>

<style scoped>
.container {
  @apply flex flex-col content-center text-center mx-auto w-80 mt-32 xl:flex-row xl:w-100% xl:h-463px lg:w-100% lg:flex lg:flex-row;
}
.image {
  @apply w-304px h-auto mx-auto xl:w-614px xl:h-463px;
}
.head {
  @apply mt-8 text-lg font-semibold lg:text-left lg:text-xl xl:ml-9 xl:w-506px xl:text-3xl;
}
.para {
  @apply mt-5 text-left text-base xl:w-563px xl:ml-9 lg:w-96;
}
</style>
