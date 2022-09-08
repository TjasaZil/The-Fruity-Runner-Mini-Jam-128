<template>
  <div class="grid-container">
    <div
      v-for="container in containers"
      :key="container"
      class="little-container"
    >
      <img
        data-test="grid-icons-test"
        :src="container.url"
        alt="grid image"
        class="mx-auto h-20 w-auto"
      />

      <h2
        data-test="grid-headers-test"
        class="font-['Raleway'] mt-5 text-lg font-semibold mx-auto w-80"
      >
        {{ container.header }}
      </h2>
      <p data-test="grid-paragraph-test" class="paragraph font-['Open Sans']">
        {{ container.paragraph }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "GridComponent",
  data() {
    return {
      containers: [
        {
          url: require("@/assets/images/icon-access-anywhere.svg"),
          header: "Access your files, anywhere",
          paragraph:
            "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
        },
        {
          url: require("@/assets/images/icon-security.svg"),
          header: "Security you can trust",
          paragraph:
            "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
        },
        {
          url: require("@/assets/images/icon-collaboration.svg"),
          header: "real-time collaboration",
          paragraph:
            "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
        },
        {
          url: require("@/assets/images/icon-any-file.svg"),
          header: "Store any type of file",
          paragraph:
            "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.grid-container {
  @apply w-80 flex flex-col content-center justify-center mx-auto mt-6 lg:w-880px lg:h-507px lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:mt-40 lg:gap-y-11 text-center;
}
.little-container {
  @apply w-80 mx-auto mt-24 lg:w-394px lg:h-214px lg:mt-10;
}
.paragraph {
  @apply mt-5 mx-auto lg:w-363px lg:text-15px;
}
</style>
