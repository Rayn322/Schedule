<script lang="ts">
  // the $lib alias throws an error help
  // @ts-expect-error
  import { getCurrentPeriod } from '$lib/timer';
  // @ts-expect-error
  import type { Period } from '$lib/schedule';
  // @ts-expect-error
  import { formatCountdown } from '$lib/util/formatter';
  // @ts-expect-error
  import { getTimeLeft } from '$lib/timer';
  // @ts-expect-error
  import type { TimeLeft } from '$lib/timer';

  let currentPeriod: Period = getCurrentPeriod();
  let hoursLeft = 1;
  let minutesLeft = 1;
  let secondsLeft = 1;

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

  updateTime();
</script>

<main>
  <p>{currentPeriod.name}</p>
  <p>It ends in {formatCountdown(hoursLeft, minutesLeft, secondsLeft)}.</p>
</main>
