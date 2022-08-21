<script lang="ts">
  import { getCurrentPeriod } from '$lib/timer';
  import type { Period } from '$lib/schedule';
  import { formatCountdown } from '$lib/util/formatter';
  import { getTimeLeft } from '$lib/timer';
  import type { TimeLeft } from '$lib/timer';

  let currentPeriod: Period;
  let hoursLeft = 0;
  let minutesLeft = 0;
  let secondsLeft = 0;

  // every 0.1 seconds so that it's almost in sync with actual seconds
  setInterval(() => {
    updateTime();
  }, 100);

  function updateTime() {
    if (hoursLeft === 0 && minutesLeft === 0 && secondsLeft === 0) {
      currentPeriod = getCurrentPeriod();
    }

    const { hours, minutes, seconds }: TimeLeft = getTimeLeft(currentPeriod);
    hoursLeft = hours;
    minutesLeft = minutes;
    secondsLeft = seconds;
  }
</script>

<main>
  {#if currentPeriod}
    <div class="container">
      <p class="period">{currentPeriod.name}</p>
      <p class="time">Ends in {formatCountdown(hoursLeft, minutesLeft, secondsLeft)}.</p>
    </div>
  {/if}
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap');

  :root {
    background-color: rgb(32, 32, 32);
    color: rgb(236, 236, 236);
    font-family: 'Quicksand', sans-serif;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }

  .period {
    font-size: 3.5rem;
    font-weight: 600;
    text-align: center;
  }

  .time {
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
  }
</style>
