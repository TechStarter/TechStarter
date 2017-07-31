const calculatePercentage = (valueA, valueB) => {
  valueA = Number(valueA) || 0;
  let res = Math.round(valueA / valueB * 100);
  if (res < 0) { res = 0; }

  return res <= 100 ? res : 100;
};

const convertToSlug = str => {
  let hyphenated = str.split(/[^A-Za-z0-9]/g).filter(el => el !== '').map(el => el.toLowerCase()).join('-');

  return hyphenated;
};

const strColor = (str) => {
  let s = str.toLowerCase();
  let color = {
    a: '#652e04',
    b: '#24c8c6',
    c: '#5e4807',
    d: '#1c0733',
    e: '#158a72',
    f: '#436821',
    g: '#cc3b6d',
    h: '#a5d305',
    i: '#ba4a89',
    j: '#2691d3',
    k: '#7e4e85',
    l: '#9ca2aa',
    m: '#f9ae2c',
    n: '#80d7e7',
    o: '#3fe7a5',
    p: '#f97021',
    q: '#5ad103',
    r: '#52859f',
    s: '#7eacad',
    t: '#ad88b6',
    u: '#3f55d5',
    v: '#1d2609',
    w: '#bbb600',
    x: '#9d661c',
    y: '#3d4f35',
    z: '#b72fee'
  };

  return color[s];
};

module.exports = { calculatePercentage, convertToSlug, strColor };
