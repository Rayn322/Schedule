import type { Schedule } from '$lib/schedule';

export const block2: Schedule = [
  {
    name: 'Before School',
    start: {
      hour: 0,
      minute: 0
    },
    end: {
      hour: 7,
      minute: 45
    }
  },

  {
    name: '1st Period',
    start: {
      hour: 7,
      minute: 45
    },
    end: {
      hour: 9,
      minute: 5
    }
  },

  {
    name: 'Passing Period',
    start: {
      hour: 9,
      minute: 5
    },
    end: {
      hour: 9,
      minute: 12
    }
  },

  {
    name: 'Tutorial',
    start: {
      hour: 9,
      minute: 12
    },
    end: {
      hour: 9,
      minute: 42
    }
  },

  {
    name: 'Break',
    start: {
      hour: 9,
      minute: 42
    },
    end: {
      hour: 9,
      minute: 54
    }
  },

  {
    name: 'Passing Period',
    start: {
      hour: 9,
      minute: 54
    },
    end: {
      hour: 10,
      minute: 1
    }
  },

  {
    name: '3rd Period',
    start: {
      hour: 10,
      minute: 1
    },
    end: {
      hour: 11,
      minute: 21
    }
  },

  {
    name: 'Passing Period',
    start: {
      hour: 11,
      minute: 21
    },
    end: {
      hour: 11,
      minute: 28
    }
  },

  {
    name: '5th Period',
    start: {
      hour: 11,
      minute: 28
    },
    end: {
      hour: 12,
      minute: 48
    }
  },

  {
    name: 'Lunch',
    start: {
      hour: 12,
      minute: 48
    },
    end: {
      hour: 13,
      minute: 23
    }
  },

  {
    name: 'Passing Period',
    start: {
      hour: 13,
      minute: 23
    },
    end: {
      hour: 13,
      minute: 30
    }
  },

  {
    name: '7th Period',
    start: {
      hour: 13,
      minute: 30
    },
    end: {
      hour: 14,
      minute: 50
    }
  },

  {
    name: 'After School',
    start: {
      hour: 14,
      minute: 50
    },
    end: {
      hour: 31,
      minute: 45
    }
  }
];
