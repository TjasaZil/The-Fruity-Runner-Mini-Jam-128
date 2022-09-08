<template>
  <header class="header">
    <div class="w-full h-16">
      <div class="flex flex-nowrap h-full px-8 mx-auto">
        <img
          data-test="company-icon-test"
          src="@/assets/images/logo.svg"
          alt="fylo logo"
          class="image"
        />
        <nav class="h-full ml-auto">
          <ul class="text-white flex h-full m-0 p-0 list-none">
            <li
              v-for="NavItem in NavItems"
              :key="NavItem"
              data-test="menu-items-test"
              class="mr-6 items-center flex lg:mr-9"
            >
              {{ NavItem }}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      NavItems: ["Features", "Team", "Sign In"],
    };
  },
};
</script>

<style scoped>
.header {
  @apply w-full text-sm font-['Raleway'] lg:h-14 lg:pt-8 lg:text-base hover:cursor-pointer hover:underline hover:font-semibold;
}
.image {
  @apply flex items-center w-20 h-6 content-center my-auto lg:h-52px lg:w-auto;
}
</style>
