<template>
  <main
    class="w-mobile-container-width h-mobile-container-height bg-white m-auto flex flex-col rounded-2xl font-['Kumbh Sans'] md:w-desktop-container-width"
  >
    <div
      data-test="bg-image-test"
      class="bg-container-bg w-mobile-container-width h-mobile-container-background-height rounded-t-2xl z-0 absolute md:w-desktop-container-width"
    ></div>

    <ProfileImage />
    <NameTextComponent />
    <hr class="border-gray-200 border-1 mb-5" />
    <StatisticsComponent />
  </main>
</template>

<script>
import ProfileImage from "./ProfileImage.vue";
import NameTextComponent from "./NameTextComponent.vue";
import StatisticsComponent from "./StatisticsComponent.vue";

export default {
  name: "MainComponent",
  components: { ProfileImage, NameTextComponent, StatisticsComponent },
};
</script>
