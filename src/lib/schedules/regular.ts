import type { Schedule } from '$lib/schedule';

export const regular: Schedule = [
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
      minute: 20
    }
  },

  {
    name: 'Passing Period',
    start: {
      hour: 9,
      minute: 20
    },
    end: {
      hour: 9,
      minute: 27
    }
  },

  {
    name: '2nd Period',
    start: {
      hour: 9,
      minute: 27
    },
    end: {
      hour: 10,
      minute: 19
    }
  },

  {
    name: 'Passing Period',
    start: {
      hour: 10,
      minute: 19
    },
    end: {
      hour: 10,
      minute: 26
    }
  },

  {
    name: '3rd Period',
    start: {
      hour: 10,
      minute: 26
    },
    end: {
      hour: 11,
      minute: 16
    }
  },

  {
    name: 'Break',
    start: {
      hour: 11,
      minute: 16
    },
    end: {
      hour: 11,
      minute: 26
    }
  },

  {
    name: 'Passing Period',
    start: {
      hour: 11,
      minute: 26
    },
    end: {
      hour: 11,
      minute: 33
    }
  },

  {
    name: '4th Period',
    start: {
      hour: 11,
      minute: 33
    },
    end: {
      hour: 12,
      minute: 23
    }
  },

  {
    name: 'Passing Period',
    start: {
      hour: 12,
      minute: 23
    },
    end: {
      hour: 12,
      minute: 30
    }
  },

  {
    name: '5th Period',
    start: {
      hour: 12,
      minute: 30
    },
    end: {
      hour: 13,
      minute: 20
    }
  },

  {
    name: 'Lunch',
    start: {
      hour: 13,
      minute: 20
    },
    end: {
      hour: 13,
      minute: 51
    }
  },

  {
    name: 'Passing Period',
    start: {
      hour: 13,
      minute: 51
    },
    end: {
      hour: 13,
      minute: 58
    }
  },

  {
    name: '6th Period',
    start: {
      hour: 13,
      minute: 58
    },
    end: {
      hour: 14,
      minute: 48
    }
  },

  {
    name: 'Passing Period',
    start: {
      hour: 14,
      minute: 48
    },
    end: {
      hour: 14,
      minute: 55
    }
  },

  {
    name: '7th Period',
    start: {
      hour: 14,
      minute: 55
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
