<script>
  export let statistics = [
    {
      header: "Work",
      time: "32hrs",
      paragraph: "Last Week - 36hrs",
      image: "images/icon-work.svg",
      background: "var(--light-orange)",
    },
    {
      header: "Play",
      time: "10hrs",
      paragraph: "Last Week - 8hrs",
      image: "images/icon-play.svg",
      background: "var(--blue)",
    },
    {
      header: "Study",
      time: "4hrs",
      paragraph: "Last Week - 7hrs",
      image: "images/icon-study.svg",
      background: "var(--soft-red)",
    },
    {
      header: "Exercise",
      time: "4hrs",
      paragraph: "Last Week - 5hrs",
      image: "images/icon-exercise.svg",
      background: "var(--lime-green)",
    },
    {
      header: "Social",
      time: "5hrs",
      paragraph: "Last Week - 10hrs",
      image: "images/social.svg",
      background: "var(--violet)",
    },
    {
      header: "Self Care",
      time: "2hrs",
      paragraph: "Last Week - 2hrs",
      image: "images/icon-self-care.svg",
      background: "var(--soft-orange)",
    },
  ];;

  export let weekFunction = () => {
    statistics = [
      {
        header: "Work",
        time: "32hrs",
        paragraph: "Last Week - 36hrs"
      },
      {
        header: "Play",
        time: "10hrs",
        paragraph: "Last Week - 8hrs"
      },
      {
        header: "Study",
        time: "4hrs",
        paragraph: "Last Week - 7hrs"
      },
      {
        header: "Exercise",
        time: "4hrs",
        paragraph: "Last Week - 5hrs"
      },
      {
        header: "Social",
        time: "5hrs",
        paragraph: "Last Week - 10hrs"
      },
      {
        header: "Self Care",
        time: "2hrs",
        paragraph: "Last Week - 2hrs"
      },
    ];
  };
  export let dayFunction = () => {
    statistics = [
      {
        header: "Work",
        time: "5hrs",
        paragraph: "Last Day - 7hrs"
      },
      {
        header: "Play",
        time: "1hrs",
        paragraph: "Last Day - 2hrs"
      },
      {
        header: "Study",
        time: "0hrs",
        paragraph: "Last Day - 1hrs"
      },
      {
        header: "Exercise",
        time: "1hrs",
        paragraph: "Last Day - 1hrs"
      },
      {
        header: "Social",
        time: "1hrs",
        paragraph: "Last Day - 3hrs"
      },
      {
        header: "Self Care",
        time: "0hrs",
        paragraph: "Last Day - 1hrs"
      },
    ];
  };
  export let monthFunction = () => {
    statistics = [
      {
        header: "Work",
        time: "103hrs",
        paragraph: "Last Month - 128hrs"
      },
      {
        header: "Play",
        time: "23hrs",
        paragraph: "Last Month - 29hrs"
      },
      {
        header: "Study",
        time: "13hrs",
        paragraph: "Last Month - 19hrs"
      },
      {
        header: "Exercise",
        time: "11hrs",
        paragraph: "Last Month - 18hrs"
      },
      {
        header: "Social",
        time: "21hrs",
        paragraph: "Last Month - 23hrs"
      },
      {
        header: "Self Care",
        time: "7hrs",
        paragraph: "Last Month - 11hrs"
      },
    ];
  };
</script>

<main>
  <div class="buttons-container">
    <div class="profile-container">
      <div class="another-container">
        <img
          src="images/image-jeremy.png"
          alt="jeremy profile"
          class="profile-picture"
        />
        <div class="text-container">
          <p class="p-text-container">Report for</p>
          <h1 class="header-text-container">Jeremy Robson</h1>
        </div>
      </div>
    </div>
    <div class="id-buttons">
      <button id="day-button" on:click={dayFunction}> daily</button>
      <button id="week-button" on:click={weekFunction}> weekly</button>
      <button id="month-button" on:click={monthFunction}> monthly</button>
    </div>
  </div>

  <div class="outer-container">
    {#each statistics as statistic}
      <div class="statistics-container">
        <div
          class="background-container"
          style="background:{statistic.background} url({statistic.image}) no-repeat 
          top right;"
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
  </div>
</main>
