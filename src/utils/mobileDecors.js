/** Small stars tucked into corners — mobile only */
export function buildMobileScatter() {
  const tops = [6, 14, 82, 90];
  const items = [];

  tops.forEach((top, i) => {
    items.push({
      type: 'star',
      variant: ['gold', 'coral', 'lavender', 'gold'][i],
      size: 8 + (i % 2) * 3,
      top: `${top}%`,
      left: '4%',
      edge: 'left',
      scatter: true,
      anim: i % 2 === 0 ? 'twinkle' : 'float',
      delay: i * 0.2,
      rotate: (i % 4) * 8 - 12,
    });
    items.push({
      type: 'star',
      variant: ['lavender', 'gold', 'coral', 'lavender'][i],
      size: 7 + (i % 2) * 2,
      top: `${top + 2}%`,
      right: '4%',
      edge: 'right',
      scatter: true,
      anim: i % 2 === 1 ? 'twinkle' : 'float',
      delay: i * 0.15 + 0.1,
      rotate: (i % 3) * 6,
    });
  });

  return items;
}

function topPercent(item) {
  const raw = item.top ?? '50%';
  return parseFloat(String(raw)) || 50;
}

/** Keep corner decor that won't sit on top of body copy */
export function pickMobileDecors(items = []) {
  return items
    .filter((item) => item.type !== 'squiggle')
    .filter((item) => {
      const top = topPercent(item);
      return top <= 26 || top >= 66;
    })
    .sort((a, b) => {
      const score = (item) => {
        const top = topPercent(item);
        const corner = top <= 26 || top >= 66 ? 2 : 0;
        const type =
          item.type === 'sticker' ? 3 : item.type === 'star' ? 2 : item.type === 'pin' ? 1 : 0;
        return corner + type;
      };
      return score(b) - score(a);
    })
    .slice(0, 5)
    .map((item) => {
      const next = { ...item };
      if (next.left != null && parseFloat(String(next.left)) < 20) {
        next.left = '3%';
      }
      if (next.right != null && parseFloat(String(next.right)) < 20) {
        next.right = '3%';
      }
      return next;
    });
}

export function decorForViewport(items, scatterMode, { isMobile, isTablet }) {
  if (isMobile) {
    return {
      items: [...pickMobileDecors(items), ...buildMobileScatter()],
      scatter: false,
    };
  }

  if (isTablet) {
    return {
      items,
      scatter: scatterMode === 'high' ? 'normal' : scatterMode === 'normal' ? false : scatterMode,
    };
  }

  return { items, scatter: scatterMode };
}
