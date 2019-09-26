var GAME = {
  canvas : {
    width : 800,
    height : 600
  },
  started : true
};

var SPACE_SHIP = {
  initialized : false,
  bullets : [],
  latest : {
    x : 0,
    y : 0
  }
};


var ASTEROIDS = {
  asteroids : [],
  type : -1,
  scale : 5,
  latest : {
    x : 0,
    y : 0
  },
  positionsT0 : [
    {
      x : 0,
      y : 2
    },
    {
      x : 1,
      y : 1.5
    },
    {
      x : 2,
      y : 0
    },
    {
      x : 1,
      y : -1.5
    },
    {
      x : 0,
      y : -2
    },
    {
      x : -1,
      y : -1.5
    },
    {
      x : -2,
      y : 0
    },
    {
      x : -1,
      y : 1.5
    },
    {
      x : 0,
      y : 2
    }
  ],
  positionsT1 : [
    {
      x : 0,
      y : 2
    },
    {
      x : 1,
      y : 1.5
    },
    {
      x : 2,
      y : 0
    },
    {
      x : 1,
      y : -1.5
    },
    {
      x : 0,
      y : -2
    },
    {
      x : -1,
      y : -1.5
    },
    {
      x : -2,
      y : 0
    },
    {
      x : -1,
      y : 1.5
    },
    {
      x : 0,
      y : 2
    }
  ],
  positionsT2 : [
    {
      x : 0,
      y : 2
    },
    {
      x : 1,
      y : 1.5
    },
    {
      x : 2,
      y : 0
    },
    {
      x : 1,
      y : -1.5
    },
    {
      x : 0,
      y : -2
    },
    {
      x : -1,
      y : -1.5
    },
    {
      x : -2,
      y : 0
    },
    {
      x : -1,
      y : 1.5
    },
    {
      x : 0,
      y : 2
    }
  ]
};
