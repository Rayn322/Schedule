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
    <p>{currentPeriod.name}</p>
    <p>It ends in {formatCountdown(hoursLeft, minutesLeft, secondsLeft)}.</p>
  {/if}
</main>
