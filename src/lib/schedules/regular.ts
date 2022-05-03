import type { Schedule } from '$lib/schedule';

export const regular: Schedule = [
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
      hour: 8,
      minute: 34
    }
  },

  {
    name: 'Passing Period',
    start: {
      hour: 8,
      minute: 34
    },
    end: {
      hour: 8,
      minute: 41
    }
  },

  {
    name: '2nd Period',
    start: {
      hour: 8,
      minute: 41
    },
    end: {
      hour: 9,
      minute: 32
    }
  },

  {
    name: 'Passing Period',
    start: {
      hour: 9,
      minute: 32
    },
    end: {
      hour: 9,
      minute: 39
    }
  },

  {
    name: '3rd Period',
    start: {
      hour: 9,
      minute: 39
    },
    end: {
      hour: 10,
      minute: 28
    }
  },

  {
    name: 'Break',
    start: {
      hour: 10,
      minute: 28
    },
    end: {
      hour: 10,
      minute: 35
    }
  },

  {
    name: 'Passing Period',
    start: {
      hour: 10,
      minute: 35
    },
    end: {
      hour: 10,
      minute: 42
    }
  },

  {
    name: '4th Period',
    start: {
      hour: 10,
      minute: 42
    },
    end: {
      hour: 11,
      minute: 31
    }
  },

  {
    name: 'Passing Period',
    start: {
      hour: 11,
      minute: 31
    },
    end: {
      hour: 11,
      minute: 38
    }
  },

  {
    name: '5th Period',
    start: {
      hour: 11,
      minute: 38
    },
    end: {
      hour: 12,
      minute: 27
    }
  },

  {
    name: 'Lunch',
    start: {
      hour: 12,
      minute: 27
    },
    end: {
      hour: 12,
      minute: 58
    }
  },

  {
    name: 'Passing Period',
    start: {
      hour: 12,
      minute: 58
    },
    end: {
      hour: 13,
      minute: 5
    }
  },

  {
    name: '6th Period',
    start: {
      hour: 13,
      minute: 5
    },
    end: {
      hour: 13,
      minute: 54
    }
  },

  {
    name: 'Passing Period',
    start: {
      hour: 13,
      minute: 54
    },
    end: {
      hour: 14,
      minute: 1
    }
  },

  {
    name: '7th Period',
    start: {
      hour: 14,
      minute: 1
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
