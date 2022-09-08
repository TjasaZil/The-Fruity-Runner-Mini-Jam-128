<template>
  <div class="lg:flex lg:flex-row">
    <div
      v-for="quote in quotes"
      :key="quote"
      class="bg-testimonials-bg w-72 h-40 rounded-md mx-auto mt-6 xl:w-360px xl:h-200px xl:z-20"
    >
      <p
        data-test="paragraph-test"
        class="font-['Open Sans'] text-left font-normal text-paragraph-1 w-60 mx-auto pt-7 leading-5 xl:text-15px xl:w-309px xl:px-2"
      >
        {{ quote.paragraph }}
      </p>
      <div
        class="flex justify-center content-center w-36 text-left ml-6 mt-3 font-['Open Sans'] text-xs tracking-wide xl:mt-7"
      >
        <img
          :src="quote.profile"
          data-test="profile-image-test"
          alt="profile img"
          class="mx-auto w-6 h-6 rounded-full xl:mt-1"
        />
        <div class="flex flex-col ml-2">
          <p data-test="name-test" class="font-bold">
            {{ quote.name }}
          </p>
          <p data-test="jobs-test" class="font-light text-jobs-1">
            {{ quote.job }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuotesComponent",

  data() {
    return {
      quotes: [
        {
          paragraph:
            "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
          profile: require("@/assets/images/profile-1.jpg"),
          name: "Satish Patel",
          job: "Founder & CEO, Huddle",
        },
        {
          paragraph:
            "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
          profile: require("@/assets/images/profile-2.jpg"),
          name: "Bruce McKenzie",
          job: "Founder & CEO, Huddle",
        },
        {
          paragraph:
            "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
          profile: require("@/assets/images/profile-3.jpg"),
          name: "Iva Boyd",
          job: "Founder & CEO, Huddle",
        },
      ],
    };
  },
};
</script>
