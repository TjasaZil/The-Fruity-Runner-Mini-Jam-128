# Frontend Mentor - Clipboard landing page solution (WIP)

This is a solution to the [Clipboard landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clipboard-landing-page-5cc9bccd6c4c91111378ecb9). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![screenshot](design/desktop-design.jpg)


### Links

- Solution URL: [GitHub](https://github.com/zuzexx/FM_ClipboardLandingPage)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

I divided the site into different sections and wrote a Svelte component for each section. After that I styled each section, makjing sure they all look good together.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Svelte](https://svelte.dev/) - JS framework
### What I learned

I learned a new way to make a button background transition on hover.



```css
.proud-of-this-css { /*button background transition on hover*/
   button:hover{
        cursor:pointer;
        transform: scale(0.95);
        transition: 0.7s;
        background-position: right;
    }
    .ios-btn{
        background: linear-gradient(to right, var(--strong-cyan) 50%, var(--cyan) 50%) left;
        background-size: 200% 100%;
        border-bottom:3px solid var(--cyan);
    }
}
```




### Continued development

Use more Svelte
### Useful resources

- [Button background color transition](https://stackoverflow.com/questions/17212094/fill-background-color-left-to-right-css) - This is where I got the necessary resources to make the linear background transition for buttons


## Author

- Website - [GitHub](https://github.com/zuzexx)
- Frontend Mentor - [@zuzexx](https://www.frontendmentor.io/profile/zuzexx)
- Linkedin - [Linkedin](https://www.linkedin.com/in/tjasa-zilavec/)


## Acknowledgments

Thank you to everybody on Frontend Mentor for taking their time to look at my code and make suggestions.
