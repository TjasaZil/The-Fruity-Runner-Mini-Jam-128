# Frontend Mentor - Profile card component solution

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

- Build out the project to the designs provided

### Screenshot

![desktop](./design/desktop-design.jpg)

### Links

- Solution URL: [GitHub](https://github.com/zuzexx/FM_ProfileCardComponent)
- Live Site URL: [Vercel live site](https://profile-card-component-main-zuzexx.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- [Tailwind](https://tailwindcss.com/)
- [Vue.js](https://vuejs.org/)
- [Jest](https://jestjs.io/) - for testing
- Test Driven development

### What I learned

I learned basics of testing with Jest (how to test for images and text), some more Vue.js and tailwindcss.

```js
describe("ProfileImage", () => {
  it("displays profile image", () => {
    const wrapper = mount(ProfileImage);
    const imageFound = wrapper.findAll("[data-test='profile-image-test']");
    expect(imageFound.length).toBe(1);
  });
});
```

### Continued development

### Useful resources

- [Test if there is an image with Jest](https://stackoverflow.com/questions/59787674/vue-unit-test-with-jest-how-to-test-if-there-is-one-specific-image-in-the-compo)
- [Example resource 2](https://www.example.com)

## Author

- Website - [GitHub](https://github.com/zuzexx)
- Frontend Mentor - [@zuzexx](https://www.frontendmentor.io/profile/zuzexx)
- Linkedin - [Linkedin](https://www.linkedin.com/in/tjasa-zilavec/)
