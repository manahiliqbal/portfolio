const VARIANTS = ['gold', 'coral', 'lavender'];

/** Horizontal spread bands (%) — keeps decor off the margin line but not cramped */
const LEFT_EDGE = [5, 7, 9, 6, 8, 10, 5.5, 7.5];
const LEFT_GUTTER = [14, 17, 20, 16, 19, 22, 15, 21];
const RIGHT_EDGE = [4, 6, 5, 7, 4.5, 6.5];
const RIGHT_GUTTER = [10, 13, 11, 15, 12, 14];

/** Fills page with small stars spread across margin + gutter zones */
export function buildScatter(density = 'normal') {
  const tops =
    density === 'high'
      ? [4, 9, 14, 19, 24, 29, 34, 39, 44, 49, 54, 59, 64, 69, 74, 79, 84, 89, 94]
      : [6, 16, 26, 36, 46, 56, 66, 76, 86];

  const items = [];

  tops.forEach((top, i) => {
    items.push({
      type: 'star',
      variant: VARIANTS[i % 3],
      size: 6 + (i % 4) * 2,
      top: `${top}%`,
      left: `${LEFT_EDGE[i % LEFT_EDGE.length]}%`,
      edge: 'left',
      scatter: true,
      anim: i % 2 === 0 ? 'twinkle' : 'float',
      delay: (i * 0.14) % 2.8,
      rotate: (i % 6) * 7 - 18,
    });
    items.push({
      type: 'star',
      variant: VARIANTS[(i + 1) % 3],
      size: 7 + (i % 3) * 2,
      top: `${Math.min(top + 3, 96)}%`,
      right: `${RIGHT_EDGE[i % RIGHT_EDGE.length]}%`,
      edge: 'right',
      scatter: true,
      anim: i % 2 === 1 ? 'twinkle' : 'float',
      delay: (i * 0.11) % 2.2,
      rotate: (i % 5) * 6,
    });
  });

  const gutterTops = density === 'high' ? [8, 22, 36, 50, 64, 78, 92] : [12, 35, 58, 82];

  gutterTops.forEach((top, i) => {
    items.push({
      type: 'star',
      variant: VARIANTS[i % 3],
      size: 9 + (i % 2) * 3,
      top: `${top}%`,
      left: `${LEFT_GUTTER[i % LEFT_GUTTER.length]}%`,
      gutter: true,
      anim: 'float',
      delay: i * 0.35,
      rotate: -12 + i * 4,
    });
    items.push({
      type: 'star',
      variant: VARIANTS[(i + 2) % 3],
      size: 8 + (i % 3),
      top: `${top + 2}%`,
      right: `${RIGHT_GUTTER[i % RIGHT_GUTTER.length]}%`,
      gutter: true,
      anim: 'twinkle',
      delay: i * 0.28,
      rotate: 8 - i * 3,
    });
  });

  return items;
}
