function topPercent(item) {
  const raw = item.top ?? '50%';
  return parseFloat(String(raw)) || 50;
}

/** Keep corner decor that won't sit on top of body copy */
export function pickMobileDecors(items = []) {
  return items
    .filter((item) => {
      const top = topPercent(item);
      return top <= 26 || top >= 66;
    })
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

export function decorForViewport(items, { isMobile }) {
  return isMobile ? pickMobileDecors(items) : items;
}
