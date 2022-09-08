<template>
  <div
    class="flex flex-col content-center justify-center mx-auto text-center w-80 mt-36 xl:w-1180px lg:w-950px z-20"
  >
    <img
      src="@/assets/images/bg-quotes.png"
      data-test="quotation-image-test"
      alt="quotation"
      class="w-8 h-12 -mb-10 ml-5 z-0 relative xl:h-auto xl:w-20"
    />
    <QuotesComponent class="relative" />
  </div>
</template>

<script>
import QuotesComponent from "./QuotesComponent.vue";
export default {
  name: "QuotationComponent",
  components: { QuotesComponent },
};
</script>
