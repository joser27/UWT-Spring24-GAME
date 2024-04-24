const collisions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 131, 131, 131, 131,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 131, 131,
    0, 0, 0, 0, 0, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0, 131,
    0, 0, 0, 0, 0, 2228, 3254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2228, 0, 0, 0, 0, 0, 0, 0, 0, 131, 158, 0, 0, 131,
    0, 0, 0, 0, 0, 2228, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2228, 0, 0, 0, 0, 0, 0, 0, 0, 131, 131, 131, 131, 131,
    0, 0, 0, 0, 0, 2228, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2228, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2228, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2228, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2228, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2228, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2228, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 131, 131, 131, 131, 0, 131, 131, 0, 131, 0, 131, 0, 2228, 2228, 2228, 2228, 0, 0, 0, 131, 131, 131, 0, 2228, 2228, 2228, 0, 0, 0, 0, 131, 0, 131, 0, 0, 0, 0, 0, 0, 2228, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2228, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0,
    0, 0, 0, 131, 131, 131, 131, 131, 0, 131, 131, 131, 131, 131, 2228, 2228, 2228, 2228, 2228, 2228, 131, 131, 0, 0, 131, 0, 2228, 2228, 2228, 0, 0, 0, 2228, 0, 0, 131, 131, 0, 0, 0, 0, 0, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 2228, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0,
    0, 0, 0, 131, 131, 131, 131, 0, 0, 131, 0, 131, 131, 131, 2228, 0, 0, 0, 2228, 2228, 2228, 0, 2228, 131, 2228, 131, 2228, 131, 2228, 0, 0, 2228, 0, 2228, 2228, 2228, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0,
    0, 0, 0, 131, 131, 131, 2228, 131, 0, 131, 131, 131, 131, 131, 0, 131, 2228, 2228, 2228, 2228, 2228, 131, 0, 0, 0, 0, 0, 0, 2228, 2228, 0, 2228, 2228, 2228, 2228, 2228, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0,
    0, 0, 0, 131, 131, 131, 2228, 131, 131, 131, 0, 131, 0, 131, 2228, 0, 0, 0, 0, 2228, 2228, 0, 0, 0, 2228, 0, 0, 0, 2228, 0, 2228, 2228, 2228, 2228, 2228, 2228, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0,
    0, 0, 0, 131, 2228, 2228, 2228, 131, 131, 131, 131, 131, 0, 0, 0, 0, 0, 2228, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2228, 2228, 2228, 2228, 2228, 131, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0,
    0, 0, 0, 131, 2228, 2254, 0, 131, 131, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2228, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2228, 2228, 2228, 2228, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 131, 131, 0, 0, 0,
    0, 0, 0, 131, 2228, 0, 0, 0, 0, 131, 0, 0, 0, 0, 0, 0, 0, 0, 2228, 0, 0, 0, 0, 0, 0, 0, 0, 2228, 0, 0, 0, 2228, 0, 0, 0, 0, 0, 131, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 131, 0, 0, 0,
    0, 0, 0, 131, 2228, 2228, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 2228, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 131, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 131, 0, 131, 0, 0, 0,
    0, 0, 0, 131, 2228, 0, 131, 0, 0, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 131, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 131, 0, 131, 131, 0, 0, 0,
    0, 0, 0, 131, 2228, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 131, 131, 0, 0, 0, 131, 0, 0, 0,
    0, 0, 0, 131, 2228, 2228, 131, 0, 2228, 0, 0, 0, 131, 0, 0, 0, 0, 0, 2228, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 131, 0, 0, 0, 0, 0, 131, 2228, 131, 0, 0, 0, 0, 0, 0, 131, 131, 131, 0, 0, 0, 0, 0, 131, 0, 0, 0,
    0, 0, 0, 131, 2228, 2228, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2228, 0, 0, 0, 0, 0, 0, 0, 0, 131, 131, 131, 2228, 131, 131, 131, 131, 0, 0, 131, 0, 131, 0, 0, 131, 131, 131, 131, 131, 131, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0,
    0, 0, 0, 131, 131, 0, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 131, 0, 0, 0, 0, 131, 131, 131, 131, 0, 131, 131, 131, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0,
    0, 0, 0, 131, 2228, 0, 2228, 0, 0, 131, 131, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 131, 131, 0, 0, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 131, 0, 0, 0,
    0, 0, 0, 131, 2228, 0, 131, 131, 0, 131, 0, 131, 0, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 131, 0, 131, 0, 0, 131, 131, 0, 0, 131, 0, 0, 0, 0, 131, 0, 0, 0, 0, 0, 131, 0, 0, 0,
    0, 0, 0, 131, 2228, 131, 131, 131, 131, 131, 0, 0, 131, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0, 0, 131, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 131, 0, 0, 0,
    0, 0, 0, 131, 2228, 131, 131, 131, 131, 131, 131, 131, 0, 0, 0, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0, 0, 0, 0, 131, 0, 131, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0,
    0, 0, 0, 131, 131, 131, 131, 131, 131, 131, 0, 0, 131, 131, 0, 0, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132, 132, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0,
    0, 0, 0, 131, 2228, 131, 131, 0, 131, 131, 0, 0, 0, 131, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 131, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0,
    0, 0, 0, 131, 2228, 0, 131, 131, 0, 0, 0, 130, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2228, 0, 0, 0, 0, 0, 0, 131, 131, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0,
    0, 0, 0, 131, 2228, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 131, 0, 0, 0, 0, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0,
    0, 0, 0, 131, 2228, 0, 131, 0, 0, 0, 0, 131, 131, 0, 0, 0, 0, 0, 131, 0, 0, 2228, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0,
    0, 0, 0, 131, 2228, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0, 0, 131, 0, 0, 0,
    0, 0, 0, 131, 2228, 0, 131, 131, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0,
    0, 0, 0, 131, 2228, 0, 0, 0, 0, 0, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0,
    0, 0, 0, 131, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0,
    0, 0, 0, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]