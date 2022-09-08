<template>
  <HeaderComponent />
  <HeroComponent />
  <GridComponent />
  <ProductiveComponent />
  <QuotationComponent />

  <FooterContainer />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import HeroComponent from "./components/HeroComponent.vue";
import GridComponent from "@/components/GridComponent.vue";
import ProductiveComponent from "./components/ProductiveComponent.vue";
import QuotationComponent from "./components/QuotationComponent.vue";

import FooterContainer from "./components/FooterContainer.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
    HeroComponent,
    GridComponent,
    ProductiveComponent,
    QuotationComponent,

    FooterContainer,
  },
};
</script>

<style>
#app {
  background: hsl(217, 28%, 13%);
  color: white;
}
</style>
