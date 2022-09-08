<template>
  <div>
    <InputComponent class="relative" />
    <div
      class="font-['Raleway'] bg-footer-bg flex flex-col items-center mx-auto w-full -mt-40 z-0 absolute xl:flex-row"
    >
      <div class="mx-auto w-80 mt-48 xl:w-1240px">
        <img src="@/assets/images/logo.svg" alt="logo" class="w-28 h-8" />
        <div class="flex text-left w-80 mt-11 text-base">
          <img src="@/assets/images/icon-location.svg" class="w-6 h-6" />
          <p class="ml-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div>
          <div class="flex w-80 mx-auto text-base mt-4 xl:mt-0">
            <img src="@/assets/images/icon-phone.svg" class="w-5 h-4" />
            <p class="ml-5">+1-543-123-4567</p>
          </div>
          <div class="flex w-80 mx-auto text-base items-center mt-4">
            <img src="@/assets/images/icon-email.svg" class="w-5 h-4" />
            <p class="ml-5">example@fylo.com</p>
          </div>
          <div class="text-left w-80 mx-auto flex flex-col capitalize xl:w-auto xl:flex-row">
            <div>
            <h3>About Us</h3>
            <ul>
              <li>jobs</li>
              <li>press</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3>Contact us</h3>
            <ul>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
          <div class="flex flex-row mx-auto w-28 h-7 justify-evenly">
            <img class="icons" src="@/assets/images/facebook.png" />
            <img class="icons" src="@/assets/images/twitter.png" />
            <img class="icons" src="@/assets/images/instagram.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputComponent from "./InputComponent.vue";
export default {
  name: "FooterContainer",
  components: {
    InputComponent,
  },
};
</script>
<style scoped>
h3 {
  @apply mt-11;
}
li {
  @apply mt-3;
}
.icons {
  @apply w-7 h-7;
}
</style>
