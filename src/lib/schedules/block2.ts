import type { Schedule } from '$lib/schedule';

export const block2: Schedule = [
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
    name: '1st Period',
    start: {
      hour: 8,
      minute: 30
    },
    end: {
      hour: 9,
      minute: 51
    }
  },

  {
    name: 'Passing Period',
    start: {
      hour: 9,
      minute: 51
    },
    end: {
      hour: 9,
      minute: 58
    }
  },

  {
    name: 'Tutorial',
    start: {
      hour: 9,
      minute: 58
    },
    end: {
      hour: 10,
      minute: 29
    }
  },

  {
    name: 'Break',
    start: {
      hour: 10,
      minute: 29
    },
    end: {
      hour: 10,
      minute: 46
    }
  },

  {
    name: 'Passing Period',
    start: {
      hour: 10,
      minute: 46
    },
    end: {
      hour: 10,
      minute: 53
    }
  },

  {
    name: '3rd Period',
    start: {
      hour: 10,
      minute: 53
    },
    end: {
      hour: 12,
      minute: 14
    }
  },

  {
    name: 'Passing Period',
    start: {
      hour: 12,
      minute: 14
    },
    end: {
      hour: 12,
      minute: 21
    }
  },

  {
    name: '5th Period',
    start: {
      hour: 12,
      minute: 21
    },
    end: {
      hour: 13,
      minute: 42
    }
  },

  {
    name: 'Lunch',
    start: {
      hour: 13,
      minute: 42
    },
    end: {
      hour: 14,
      minute: 17
    }
  },

  {
    name: 'Passing Period',
    start: {
      hour: 14,
      minute: 17
    },
    end: {
      hour: 14,
      minute: 24
    }
  },

  {
    name: '7th Period',
    start: {
      hour: 14,
      minute: 24
    },
    end: {
      hour: 15,
      minute: 45
    }
  },

  {
    name: 'After School',
    start: {
      hour: 15,
      minute: 45
    },
    end: {
      hour: 32,
      minute: 30
    }
  }
];
