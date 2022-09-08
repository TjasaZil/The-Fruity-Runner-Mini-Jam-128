<template>
  <div
    class="flex flex-col content-center justify-center text-center mt-36 w-336px h-353px bg-intro-and-mail rounded-lg mx-auto z-20 xl:w-863px xl:h-275px"
  >
    <div class="xl:w-709px xl:h-211px xl:mx-auto xl:mt-5">
      <h2
        class="font-['Raleway'] text-lg font-semibold w-72 mx-auto xl:text-3xl xl:w-480px"
      >
        Get early access today
      </h2>
      <p class="text-15px mt-6 font-['Open Sans'] w-72 mx-auto xl:w-673px">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team wound be happy to
        help you
      </p>
      <div
        class="flex flex-col content-center mx-auto xl:flex xl:flex-row xl:w-709px"
      >
        <input
          type="email"
          name="mail"
          placeholder="email@example.com"
          class="w-72 border-spacing-0 rounded-3xl h-12 mx-auto mt-7 px-4 xl:mt-10 xl:w-480px"
        />
        <button
          class="w-72 border-spacing-0 rounded-3xl h-12 mx-auto mt-5 px-4 bg-gradient-to-b from-cyan-bg to-blue-bg font-bold text-base hover:from-cyan-bg hover:to-cyan-bg xl:mt-10 xl:w-200px"
        >
          Get Started For Free
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputComponent",
};
</script>
