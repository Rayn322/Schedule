import type { Schedule } from '$lib/schedule';

export const block1: Schedule = [
  {
    name: 'Before School',
    start: {
      hour: 0,
      minute: 0
    },
    end: {
      hour: 8,
      minute: 30
    }
  },

  {
    name: '2nd Period',
    start: {
      hour: 8,
      minute: 30
    },
    end: {
      hour: 9,
      minute: 50
    }
  },

  {
    name: 'Passing Period',
    start: {
      hour: 9,
      minute: 50
    },
    end: {
      hour: 9,
      minute: 57
    }
  },

  {
    name: 'Tutorial',
    start: {
      hour: 9,
      minute: 57
    },
    end: {
      hour: 10,
      minute: 26
    }
  },

  {
    name: 'Break',
    start: {
      hour: 10,
      minute: 26
    },
    end: {
      hour: 10,
      minute: 36
    }
  },

  {
    name: 'Passing Period',
    start: {
      hour: 10,
      minute: 36
    },
    end: {
      hour: 10,
      minute: 43
    }
  },

  {
    name: '4th Period',
    start: {
      hour: 10,
      minute: 43
    },
    end: {
      hour: 12,
      minute: 3
    }
  },

  {
    name: 'Passing Period',
    start: {
      hour: 12,
      minute: 3
    },
    end: {
      hour: 12,
      minute: 10
    }
  },

  {
    name: '6th Period',
    start: {
      hour: 12,
      minute: 10
    },
    end: {
      hour: 1,
      minute: 30
    }
  },

  {
    name: 'After School',
    start: {
      hour: 1,
      minute: 30
    },
    end: {
      hour: 31,
      minute: 45
    }
  }
];
