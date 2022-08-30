# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![desktop](design/desktop-design.jpg)
![mobile](design/mobile-design.jpg)


### Links

- Solution URL: [GitHub](https://github.com/zuzexx/FM_TimeTrackingDashboard)
- Live Site URL: [Vercel live site](https://fm-time-tracking-dashboard-alpha.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JS
- [Svelte](https://svelte.dev/) - JS framework

### What I learned

`on:click` and `{#each}`.

```html
<h1>Some HTML code I'm proud of

<div
          {#each statistics as statistic}
      <div class="statistics-container">
        <div
          class="background-container"
          style="background:{statistic.background} url({statistic.image}); background-repeat:no-repeat; background-position:top right;"
        >
          <div class="container">
            <div class="grid-container">
              <div class="container-one">
                <h1>{statistic.header}</h1>
                <img
                  src="images/icon-ellipsis.svg"
                  alt="elipsis icon"
                  class="elipsis-icon"
                />
              </div>
              <div class="container-two">
                <p>{statistic.time}</p>
                <div class="text">{statistic.paragraph}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/each}

</h1>

```




### Continued development


I want to focus more on learning Javascript and honing my Svelte skills.

## Author

- Website - [GitHub](https://github.com/zuzexx)
- Frontend Mentor - [@zuzexx](https://www.frontendmentor.io/profile/zuzexx)
- Linkedin - [Linkedin](https://www.linkedin.com/in/tjasa-zilavec/)


## Acknowledgments

Thank you to everybody on Frontend Mentor for taking their time to look at my code and make suggestions.
